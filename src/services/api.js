/**
 * API Service - Backend Communication
 */

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with defaults
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Contact Form API
export const contactApi = {
    submit: async (data) => {
        const response = await api.post('/contact', data);
        return response.data;
    },

    getAll: async (params = {}) => {
        const response = await api.get('/contact', { params });
        return response.data;
    }
};

// Inquiry API
export const inquiryApi = {
    submit: async (data) => {
        const response = await api.post('/inquiry', data);
        return response.data;
    },

    getAll: async (params = {}) => {
        const response = await api.get('/inquiry', { params });
        return response.data;
    }
};

// Newsletter API
export const newsletterApi = {
    subscribe: async (data) => {
        const response = await api.post('/newsletter/subscribe', data);
        return response.data;
    },

    unsubscribe: async (email, reason) => {
        const response = await api.post('/newsletter/unsubscribe', { email, reason });
        return response.data;
    }
};

// Health Check
export const healthCheck = async () => {
    const response = await api.get('/health');
    return response.data;
};

export default api;
