const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001;

// initialize app
// Added procfiles

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

// Accounts router

const accountsRouter = require('./routes/Accounts')

app.use('/auth', accountsRouter)


// start server

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('server running')
    })
}).catch((err) => {
    console.log(err)
})

