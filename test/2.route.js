const express = require('../lib/express')
const app = express()

app.get('/',function(req,res,next) {
    console.log(1)
    next('wrong')
},function(req,res,next) {
    console.log(11)
    next()
})
app.get('/2',function(req,res,next) {
    console.log(2)
    next()
})
app.get('/', function (req, res, next) {
    console.log(3)
    res.end('ok')
})
app.get('/2',function(req,res,next) {
    console.log(4)
    res.end('okok')
})
app.listen(3000)