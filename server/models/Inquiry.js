/**
 * User Inquiry Schema
 * MongoDB Model for service inquiries and project requests
 */

const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [150, 'Name cannot exceed 150 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    phone: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    companySize: {
        type: String,
        enum: ['1-10', '11-50', '51-200', '201-500', '500+'],
        default: '1-10'
    },
    serviceInterests: [{
        type: String,
        enum: [
            'quantum-computing',
            'artificial-intelligence',
            'machine-learning',
            'cybersecurity',
            'web-development',
            'mobile-development',
            'cloud-solutions',
            'data-analytics',
            'blockchain',
            'iot-solutions',
            'consulting',
            'other'
        ]
    }],
    projectDescription: {
        type: String,
        required: [true, 'Project description is required'],
        minlength: [20, 'Description must be at least 20 characters'],
        maxlength: [10000, 'Description cannot exceed 10000 characters']
    },
    budget: {
        type: String,
        enum: ['under-10k', '10k-50k', '50k-100k', '100k-500k', '500k+', 'to-be-discussed'],
        default: 'to-be-discussed'
    },
    timeline: {
        type: String,
        enum: ['urgent', '1-3-months', '3-6-months', '6-12-months', 'ongoing', 'flexible'],
        default: 'flexible'
    },
    howDidYouHear: {
        type: String,
        enum: ['google', 'linkedin', 'referral', 'social-media', 'conference', 'other'],
        default: 'other'
    },
    status: {
        type: String,
        enum: ['pending', 'reviewing', 'contacted', 'in-progress', 'completed', 'declined'],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium'
    },
    notes: [{
        content: String,
        addedBy: String,
        addedAt: { type: Date, default: Date.now }
    }],
    ipAddress: String,
    userAgent: String
}, {
    timestamps: true
});

// Indexes
inquirySchema.index({ email: 1 });
inquirySchema.index({ status: 1 });
inquirySchema.index({ priority: 1 });
inquirySchema.index({ createdAt: -1 });

module.exports = mongoose.model('Inquiry', inquirySchema);
