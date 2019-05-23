const fs = require('fs')
const https = require('https')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello HTTPS!')
})

https.createServer({
    key: fs.readFileSync('var/keys/server.key'),
    cert: fs.readFileSync('var/keys/server.cert')
}, app).listen(3000, () => {
    console.log('Listening https on 3000 ...')
})
