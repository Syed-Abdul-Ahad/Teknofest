const express =  require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello world</h1>")
})

const port = 8000

app.listen(port,()=>{
    console.log("app is running on port "+port)
})

