/**
 * Contact Routes
 * API endpoints for contact form submissions
 */

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// Validation middleware
const validateContact = [
    body('name')
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters'),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    body('subject')
        .trim()
        .isIn(['general', 'partnership', 'careers', 'support', 'quantum-computing', 'ai-ml', 'cybersecurity', 'web-development', 'other'])
        .withMessage('Please select a valid subject'),
    body('message')
        .trim()
        .isLength({ min: 10, max: 5000 })
        .withMessage('Message must be between 10 and 5000 characters'),
    body('phone')
        .optional()
        .trim()
        .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/)
        .withMessage('Please provide a valid phone number'),
    body('company')
        .optional()
        .trim()
        .isLength({ max: 200 })
        .withMessage('Company name cannot exceed 200 characters')
];

/**
 * @route   POST /api/contact
 * @desc    Submit a contact form
 * @access  Public
 */
router.post('/', validateContact, async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, phone, company, subject, message } = req.body;

        // Create new contact entry
        const contact = new Contact({
            name,
            email,
            phone,
            company,
            subject,
            message,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
        });

        await contact.save();

        res.status(201).json({
            status: 'success',
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: {
                id: contact._id,
                name: contact.name,
                email: contact.email
            }
        });

    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to submit contact form. Please try again later.'
        });
    }
});

/**
 * @route   GET /api/contact
 * @desc    Get all contacts (Admin only - add auth middleware in production)
 * @access  Private
 */
router.get('/', async (req, res) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;

        const query = status ? { status } : {};
        const skip = (parseInt(page) - 1) * parseInt(limit);

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Contact.countDocuments(query);

        res.json({
            status: 'success',
            data: {
                contacts,
                pagination: {
                    current: parseInt(page),
                    pages: Math.ceil(total / parseInt(limit)),
                    total
                }
            }
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve contacts'
        });
    }
});

/**
 * @route   PATCH /api/contact/:id/status
 * @desc    Update contact status
 * @access  Private
 */
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;

        if (!['new', 'read', 'responded', 'archived'].includes(status)) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid status value'
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact not found'
            });
        }

        res.json({
            status: 'success',
            data: contact
        });

    } catch (error) {
        console.error('Update contact status error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to update contact status'
        });
    }
});

module.exports = router;
