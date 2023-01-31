const express = require('express')
const router = express.Router()
const { Accounts } = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
const { validateToken } = require('../middlewares/AuthMiddleware')

// Logic to create an account
router.post('/', async (req, res) => {
    
    // Grab inputted username and password
    const { username, password } = req.body

    // Use bcrypt to hash the password
    bcrypt.hash(password, 10).then((hash) => {

        // after password is hash create account in database
        Accounts.create({
            username: username,
            password: hash
        })
        res.json("Account created")
    })
})

// Logic to determine wether login is successful or not
router.post('/login', async (req, res) => {

    // grab inputted username and password
    const { username, password } = req.body

    // Find account in database
    const user = await Accounts.findOne( { where: {username: username } } )

    // Use bcrypt to compare password
    if (!user)  { 
        res.json({error: "User doesn't exist."}) }
    else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) { 
                res.json({error: "Bad combination."}) }
            else {
                // Creating access token for authentication
                const accessToken = sign({username: user.username, id: user.id}, "importantCode" )
                res.json(accessToken)
                console.log('Login successful')
            }
            
        })
    }
})  

router.get('/auth', validateToken, (req, res) => {
    res.json(req.user)
})

module.exports = router;