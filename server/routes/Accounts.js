const express = require('express')
const router = express.Router()
const { Accounts } = require('../models')
const bcrypt = require('bcrypt')


router.post('/', async (req, res) => {
    const { username, password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Accounts.create({
            username: username,
            password: hash
        })
        res.json("Account created")
    })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await Accounts.findOne( { where: {username: username } } )
    if (!user) res.json({error: "User doesn't exist."})
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({error: "Bad combination."})
        res.json("Login successful")
        console.log('Login successful')
    })
})  

module.exports = router;