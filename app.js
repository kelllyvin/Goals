require ("dotenv").config()

const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const goalrouter = require("./Routes/goalrouter")


// middleware func
 
 app.use(express.json())// allows server to request bodby from post man
 app.use(cors())// allows multiplte persons to be workin on same port

// Home Route
app.get('/', (req, res) =>{
    res.status(200).json ({
        message: "welcome to GOAL api"
    })
})

app.use('/goal', goalrouter)
// erroe route

app.use((req, res) =>{
    res.status(404).json({
        sucess: false,
        message: "Resources not found"
    })
})


const connectToDb = async() =>{
    try{
     // db connection logic
  await mongoose.connect(process.env.MONGO_URI),{
    dbName: "goals"
  }

app.listen(port, () => {
  console.log(`server runung on port: ${port}`);
});
    } catch (error) {
        console.log(error);
        
    }
}
connectToDb()

