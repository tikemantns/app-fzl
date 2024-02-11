// auth/auth.route.js
const express = require('express')
const _ = require('lodash')
const router = express.Router()
const bcrypt = require('bcrypt');

router.use(express.json())

const User = require('../models/user.model')

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ message: 'Invalid email' })
        }

        const isPasswordValid = await User.findOne({ password })

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' })
        }
 
        return res.status(200).json({ message: 'Login successful', user })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
})

router.post('/register', async (req, res) => {
    const { name, email, password, phone, address, adharNumber, alternateContact } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in use' });
        }

        const newUser = new User({
            name,
            email,
            password,
            phone,
            address,
            adharNumber,
            alternateContact
        });

        await newUser.save();

        res.status(201).json({ message: 'Registration successful', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router
