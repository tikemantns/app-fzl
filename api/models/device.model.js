const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    selectedDevice: {
        type: String,
        required: true,
    },
    selectedModel: {
        type: String,
        required: true,
    },
    deviceColor: {
        type: String,
        required: true,
    },
    serialOrImei: {
        type: String,
        required: true,
    },
    deviceBoxIncluded: {
        type: Boolean,
        required: true,
    },
    devicePrice: {
        type: String,
        required: true
    },
    deviceHasIssue: {
        type: Boolean,
        required: true,
    },
    issueDescription: {
        type: String,
    },
    isInWarranty: {
        type: Boolean,
        required: true,
    },
    warrantyValidity: {
        type: String, // You might want to change this to a Date type if storing actual dates
    },
    status: {
        type: String
    },
    holdOrRejectionComment: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String
    },
    updatedAt: {
        type: Date
    }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
