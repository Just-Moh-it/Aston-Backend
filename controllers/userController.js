const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config')
const Users = require('../models/userModel')

const userController = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body
            
            const user = await Users.findOne({ email })
            if (user) return res.status(400).json({ message: "Email already exits" })

            if (password.length < 7) return res.status(400).json({ message: "Password must be atleast 7 chars long" })
            
            const passwordHash = await bcrypt.hash(password, config.SALT_ROUNDS)
            
            const newUser = new Users({
                name, email, password: passwordHash
            })
                        await newUser.save()

            const accessToken = createAccessToken({ id: newUser._id })
            const refreshToken = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/users/refresh_token'
            })

            res.status(201).json({accessToken})

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await Users.findOne({ email })
            if (!user) return res.status(400).json({ message: "User does not exist" })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ message: "Invalid Password" })

            const accessToken = createAccessToken({ id: user._id })
            const refreshToken = createRefreshToken({ id: user._id })

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/users/refresh_token'
            })

            res.json({ accessToken })

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { 'path': '/users/refresh_token' })
            res.json({ message: "Logged Out.." })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if (!rf_token) return res.status(400).json({ message: "Please login or authenticate" })

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
                if (error) res.status(400).json({ message: "Please login or authenticate" })

                const accessToken = createAccessToken({ id: user.id })

                res.json({ user, accessToken })
            })

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if (!user) return res.status(400).json({ message: "User does not exist" })

            res.json(user)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getSingle: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id).select('-password -email')

            if (!user) return res.status(400).json({ message: "Cannot find user with the id" })

            res.json({ id: user })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

const createAccessToken = user => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
    })
}

const createRefreshToken = user => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d'
    })
}

module.exports = userController