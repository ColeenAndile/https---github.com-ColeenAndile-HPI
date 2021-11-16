//adding imports
const { request } = require('express')
const express = require('express')
const app = express()
const port = 3000

// Listening  on port 3000
app.listen(port, () => console.info(`listening on port ${port}`))


//adding files which will allow us to access static flies
app.use(express.static('public'))
app.use('/css',express.static(__dirname+' public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//reading from the index.html file
app.get('',(req,res) =>{
  res.sendfile(__dirname + '/views/index.html')
})
