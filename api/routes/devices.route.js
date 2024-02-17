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
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

router.get('/list', async (req, res) => {
    try {
        let devices = []
        
        if (req?.query?.userId) {
            const user = await User.findOne({_id: req?.query?.userId})
            if(user.isAdmin) {
                devices = await Device.find({})
            } else {
                devices = await Device.find({
                    user: req.query.id
                })
            }
            return res.status(200).json({ devices })
        } else {
            throw new Error('User id required')
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
})


module.exports = router


