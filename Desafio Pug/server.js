const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views','./src/views')
app.set('view engine','pug')

app.get('/',(req,res)=>{
const {max,min,value,title}= req.query;
res.render('index',{max,min,value,title})
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})