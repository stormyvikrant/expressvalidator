const app = require("./index");
const mongoose = require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/validation");
}

app.listen(5023,async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(err,"error in connecting to server");
    }
    console.log("listenning at port 5023")
})
