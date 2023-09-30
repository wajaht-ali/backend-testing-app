require('dotenv').config()

//importing express from the main source
const express = require('express')

//storing all the power of express in app  `var`
const app = express()

//initializing a port to be listen e.g, virtual ports on PC for listening
const port = 3000

//getting a request from browser on a specific route,
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/social', (req, res) => {
  res.send('Facebook!')
})



//listening on some specific port.
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});


//whenever we go to the production mode, we are going to the users desktops and perhaps port we are using on our pc might not be free on cient's desktop. That's why we have to look and hunt for "dotENV" package here.