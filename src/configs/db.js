const mongoose=require("mongoose")
module.exports=()=>{
    return mongoose.connect("mongodb+srv://vikrantuser:<password>@cluster0.udksr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};