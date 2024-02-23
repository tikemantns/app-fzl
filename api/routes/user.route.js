// auth/auth.route.js
const express = require('express')
const _ = require('lodash')
const router = express.Router()
const bcrypt = require('bcrypt');

router.use(express.json())

const User = require('../models/user.model')

router.get('/list', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 })
        return res.status(200).json({ users })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
})

router.delete('/delete-user', async (req, res) => {
    try {
        const userId = req.body.userId;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete the user
        await User.findByIdAndDelete(userId);

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = router
