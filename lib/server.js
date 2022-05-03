const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req,res) =>{
    res.json({message: "Student API Welcome!"});
});

app.listen(port, ()=>{
    console.log(`Student API in localhost: ${port}`);
});