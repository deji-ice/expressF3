const express = require('express');
const cors = require("cors")
const route = require("./routes")
const app = express()

const port = 7000

app.use(cors())

app.use("/api", route)

// app.get("/", (req, res)=>{
//     res.send("hello world")
// })

app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})


module.exports = app