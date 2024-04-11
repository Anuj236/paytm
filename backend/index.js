const express = require("express");
const rootRouter = require("./src/routes/index")
const cors = require('cors')
const app = express();

app.use(cors({
    origin:"http://paytmpe.vercel.app"
}))
app.use(express.json())
app.use("/",(req,res)=>{
    res.send("Welcome to the Paytm Server")

})
app.use('/api/v1',rootRouter)

app.listen(3000,()=>{
    console.log("Server is listening at 3000")
})


