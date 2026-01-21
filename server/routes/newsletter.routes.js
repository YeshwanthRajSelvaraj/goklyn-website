/**
 * Newsletter Routes
 * API endpoints for newsletter subscriptions
 */

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');

// Validation middleware
const validateSubscription = [
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    body('name')
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage('Name cannot exceed 100 characters'),
    body('interests')
        .optional()
        .isArray()
        .withMessage('Interests must be an array')
];

/**
 * @route   POST /api/newsletter/subscribe
 * @desc    Subscribe to newsletter
 * @access  Public
 */
router.post('/subscribe', validateSubscription, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { email, name, interests = ['all'] } = req.body;

        // Check if email already exists
        let subscriber = await Newsletter.findOne({ email });

        if (subscriber) {
            if (subscriber.isActive) {
                return res.status(400).json({
                    status: 'error',
                    message: 'This email is already subscribed to our newsletter.'
                });
            } else {
                // Reactivate subscription
                subscriber.isActive = true;
                subscriber.unsubscribedAt = null;
                subscriber.unsubscribeReason = null;
                subscriber.interests = interests;
                if (name) subscriber.name = name;
                await subscriber.save();

                return res.json({
                    status: 'success',
                    message: 'Welcome back! Your subscription has been reactivated.'
                });
            }
        }

        // Create new subscriber
        subscriber = new Newsletter({
            email,
            name,
            interests,
            source: 'website',
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
        });

        await subscriber.save();

        res.status(201).json({
            status: 'success',
            message: 'Thank you for subscribing! You will receive our latest updates on quantum computing and AI innovations.'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to subscribe. Please try again later.'
        });
    }
});

/**
 * @route   POST /api/newsletter/unsubscribe
 * @desc    Unsubscribe from newsletter
 * @access  Public
 */
router.post('/unsubscribe', async (req, res) => {
    try {
        const { email, reason } = req.body;

        if (!email) {
            return res.status(400).json({
                status: 'error',
                message: 'Email is required'
            });
        }

        const subscriber = await Newsletter.findOne({ email: email.toLowerCase() });

        if (!subscriber) {
            return res.status(404).json({
                status: 'error',
                message: 'Email not found in our subscription list.'
            });
        }

        if (!subscriber.isActive) {
            return res.status(400).json({
                status: 'error',
                message: 'This email is already unsubscribed.'
            });
        }

        subscriber.isActive = false;
        subscriber.unsubscribedAt = new Date();
        subscriber.unsubscribeReason = reason || 'No reason provided';
        await subscriber.save();

        res.json({
            status: 'success',
            message: 'You have been successfully unsubscribed. We\'re sorry to see you go!'
        });

    } catch (error) {
        console.error('Newsletter unsubscribe error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to unsubscribe. Please try again later.'
        });
    }
});

/**
 * @route   GET /api/newsletter/subscribers
 * @desc    Get all subscribers (Admin only)
 * @access  Private
 */
router.get('/subscribers', async (req, res) => {
    try {
        const { active, page = 1, limit = 50 } = req.query;

        const query = {};
        if (active !== undefined) query.isActive = active === 'true';

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const subscribers = await Newsletter.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit))
            .select('-ipAddress -userAgent');

        const total = await Newsletter.countDocuments(query);
        const activeCount = await Newsletter.countDocuments({ isActive: true });

        res.json({
            status: 'success',
            data: {
                subscribers,
                stats: {
                    total,
                    active: activeCount,
                    inactive: total - activeCount
                },
                pagination: {
                    current: parseInt(page),
                    pages: Math.ceil(total / parseInt(limit)),
                    total
                }
            }
        });

    } catch (error) {
        console.error('Get subscribers error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve subscribers'
        });
    }
});

module.exports = router;
