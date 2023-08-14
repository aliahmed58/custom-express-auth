require('dotenv').config()
const express = require('express')
const app = express()

// import routes
const authRoutes = require('./src/routes/auth-routes')

app.use(authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT}`)
})

