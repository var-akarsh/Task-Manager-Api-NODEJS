const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/userrouter')
const taskRouter = require('./routers/taskrouter')

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})