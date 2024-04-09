const express = require("express");
const rootRouter = require("./routes/index")
const cors = require('cors')
const app = express();

app.use(cors(
    {
        origin: 'https://paytm-client.vercel.app',
        methods: ['GET', 'POST'],
        credentials: true,
      },
))
app.use(express.json())

app.use('/api/v1',rootRouter)

app.listen(3000,()=>{
    console.log("Server is listening at 3000")
})


