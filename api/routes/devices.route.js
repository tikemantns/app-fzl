// server.js
const express = require('express');
const router = express.Router()

const Device = require('../models/device.model');
const User = require('../models/user.model');

router.use(express.json())

router.post('/submit-device-details', async (req, res) => {
    try {

        const newDevice = new Device(req.body);
        await newDevice.save();

        res.status(201).json({ message: 'Device details submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
})

router.get('/list', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        let devices = []
        let count = 0

        if (req?.query?.userId) {
            const user = await User.findOne({ _id: req?.query?.userId })
            if (user.isAdmin) {
                devices = await Device.find({}).skip(skip).limit(limit)
                count = await Device.countDocuments({});
            } else {
                devices = await Device.find({
                    userId: req.query.userId
                })
                    .skip(skip)
                    .limit(limit)
                    .lean()
                count = await Device.countDocuments({
                    userId: req.query.userId
                });
            }

            const totalPages = Math.ceil(count / limit);
            return res.status(200).json({ devices, totalPages, currentPage: page, total: count });
        } else {
            throw new Error('User id required')
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(error)
    }
})

router.patch('/update-status', async (req, res) => {
    try {
        const { deviceId, status } = req.body;

        if (!deviceId || !status) {
            return res.status(400).json({ message: 'Device ID and status are required' });
        }

        const device = await Device.findById(deviceId);
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        await Device.findByIdAndUpdate(deviceId, { status });

        return res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});



module.exports = router


