const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Connect to table we made in 'Models' folder

const db = require('./models')

// Post router

const postRouter = require('./routes/PostsRoute')

app.use('/posts', postRouter)

// Comments Router

const commentsRouter = require('./routes/Comments')

app.use('/comments', commentsRouter)

// Users Router

const usersRouter = require('./routes/Users')

app.use('/auth', usersRouter)

// start server

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Listening on port 3001')
    })
})
