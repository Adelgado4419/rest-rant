require('dotenv').config()

const express = require('express')
const app = express()


app.get('/', function (req, res){
    res.send(`hello`)
})

app.get('*',(req, res) => {
    res.status(404).send('<h1>404 Page not Found</h1>')
    
})

app.listen(process.env.PORT)