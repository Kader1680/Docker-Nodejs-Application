const express = require("express")
const app = express();
const PORT = 9000;
app.listen(PORT, ()=>{
    console.log("app run sucessfuly")
})

app.get('/', (req, res)=>{res.send("hellow from the home")})