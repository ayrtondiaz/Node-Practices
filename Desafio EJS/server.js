const express= require('express')
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views','./src/views')
app.set('view engine','ejs')

const personas=[];
app.get('/',(req,res)=>{
    res.render('pages/index',{personas})
})

app.post('/personas',(req,res)=>{
    personas.push(req.body)
    res.redirect('/')
    console.log(req.body)
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})