const express = require("express");
const router  = express.Router();

const User    = require("../models/user.model");

const { body, validationResult } = require('express-validator');

router.get("",async (req,res)=>{
    try {
        const users = await User.find({}).lean().exec();
        return res.send({users:users});
    } catch (error) {
        return res.send(error);
    }
});

router.post("",body("email").isEmail(),body("pincode").isLength({ min: 5 }),body("age").custom(async(value)=>{


    console.log(typeof(value))

    if(value>=1 && value<=100){
        return true;
    }
    else{
        throw new Error("age between 1 to 100");
    }

}),body("gender").trim().custom(async(value)=>{

    if(value==="Male"||value==="Female"||value==="Others"){
        return true;
    }
    else{
        throw new Error("gender should be either Male, Female or Others");
    }
}),async (req,res) =>{
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        const newUser = await User.create(req.body);
        return res.send({users:newUser});
    } catch (error) {
        console.log(error);
        return res.status(501).send(error);
        
    }
})

module.exports = router;