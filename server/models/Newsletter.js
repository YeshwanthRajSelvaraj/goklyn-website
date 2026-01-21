/**
 * Newsletter Subscription Schema
 * MongoDB Model for newsletter subscribers
 */

const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    name: {
        type: String,
        trim: true
    },
    interests: [{
        type: String,
        enum: [
            'quantum-computing',
            'artificial-intelligence',
            'cybersecurity',
            'technology-trends',
            'company-updates',
            'events',
            'all'
        ]
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    confirmedAt: {
        type: Date
    },
    unsubscribedAt: {
        type: Date
    },
    unsubscribeReason: {
        type: String
    },
    source: {
        type: String,
        enum: ['website', 'landing-page', 'event', 'partner', 'other'],
        default: 'website'
    },
    ipAddress: String,
    userAgent: String
}, {
    timestamps: true
});

// Indexes
newsletterSchema.index({ email: 1 }, { unique: true });
newsletterSchema.index({ isActive: 1 });
newsletterSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Newsletter', newsletterSchema);
