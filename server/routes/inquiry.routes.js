/**
 * Inquiry Routes
 * API endpoints for service inquiries and project requests
 */

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');

// Validation middleware
const validateInquiry = [
    body('fullName')
        .trim()
        .isLength({ min: 2, max: 150 })
        .withMessage('Full name must be between 2 and 150 characters'),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    body('projectDescription')
        .trim()
        .isLength({ min: 20, max: 10000 })
        .withMessage('Project description must be between 20 and 10000 characters'),
    body('serviceInterests')
        .isArray({ min: 1 })
        .withMessage('Please select at least one service'),
    body('budget')
        .optional()
        .isIn(['under-10k', '10k-50k', '50k-100k', '100k-500k', '500k+', 'to-be-discussed'])
        .withMessage('Please select a valid budget range'),
    body('timeline')
        .optional()
        .isIn(['urgent', '1-3-months', '3-6-months', '6-12-months', 'ongoing', 'flexible'])
        .withMessage('Please select a valid timeline')
];

/**
 * @route   POST /api/inquiry
 * @desc    Submit a service inquiry
 * @access  Public
 */
router.post('/', validateInquiry, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const {
            fullName,
            email,
            phone,
            company,
            companySize,
            serviceInterests,
            projectDescription,
            budget,
            timeline,
            howDidYouHear
        } = req.body;

        // Determine priority based on budget
        let priority = 'medium';
        if (['100k-500k', '500k+'].includes(budget)) {
            priority = 'high';
        } else if (timeline === 'urgent') {
            priority = 'urgent';
        }

        const inquiry = new Inquiry({
            fullName,
            email,
            phone,
            company,
            companySize,
            serviceInterests,
            projectDescription,
            budget,
            timeline,
            howDidYouHear,
            priority,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
        });

        await inquiry.save();

        res.status(201).json({
            status: 'success',
            message: 'Thank you for your inquiry! Our team will review your project and get back to you within 24-48 hours.',
            data: {
                id: inquiry._id,
                referenceNumber: `GOK-${inquiry._id.toString().slice(-8).toUpperCase()}`
            }
        });

    } catch (error) {
        console.error('Inquiry submission error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to submit inquiry. Please try again later.'
        });
    }
});

/**
 * @route   GET /api/inquiry
 * @desc    Get all inquiries (Admin only)
 * @access  Private
 */
router.get('/', async (req, res) => {
    try {
        const { status, priority, page = 1, limit = 20 } = req.query;

        const query = {};
        if (status) query.status = status;
        if (priority) query.priority = priority;

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const inquiries = await Inquiry.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Inquiry.countDocuments(query);

        res.json({
            status: 'success',
            data: {
                inquiries,
                pagination: {
                    current: parseInt(page),
                    pages: Math.ceil(total / parseInt(limit)),
                    total
                }
            }
        });

    } catch (error) {
        console.error('Get inquiries error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve inquiries'
        });
    }
});

/**
 * @route   PATCH /api/inquiry/:id
 * @desc    Update inquiry status and add notes
 * @access  Private
 */
router.patch('/:id', async (req, res) => {
    try {
        const { status, priority, note } = req.body;

        const update = {};
        if (status) update.status = status;
        if (priority) update.priority = priority;

        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            {
                ...update,
                ...(note && { $push: { notes: { content: note, addedBy: 'admin' } } })
            },
            { new: true }
        );

        if (!inquiry) {
            return res.status(404).json({
                status: 'error',
                message: 'Inquiry not found'
            });
        }

        res.json({
            status: 'success',
            data: inquiry
        });

    } catch (error) {
        console.error('Update inquiry error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to update inquiry'
        });
    }
});

module.exports = router;
