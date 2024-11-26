const express = require("express")
const app = express();
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("app run sucessfuly")
})

app.get('/', (req, res)=>{res.send("hellow developer any developer dsd sds")})
app.get('/login', (req, res)=>{res.send("hellow from the ")})
app.get('/register', (req, res)=>{res.send("hellow from the register")})