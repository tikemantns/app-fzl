// server.js
const express = require('express');
const router = express.Router()

const Device = require('../models/device.model')

router.use(express.json())

router.post('/submit-device-details', async (req, res) => {
    const {
        selectedDevice,
        selectedModel,
        deviceColor,
        serialOrImei,
        deviceBoxIncluded,
        deviceHasIssue,
        issueDescription,
        isInWarranty,
        warrantyValidity
    } = req.body;

    try {
         const newDevice = new Device({
            selectedDevice,
            selectedModel,
            deviceColor,
            serialOrImei,
            deviceBoxIncluded,
            deviceHasIssue,
            issueDescription,
            isInWarranty,
            warrantyValidity
        });
        await newDevice.save();

        
        res.status(201).json({ message: 'Device details submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports = router


