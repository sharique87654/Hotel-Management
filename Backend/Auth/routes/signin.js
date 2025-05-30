const express = require("express")
const router = express.Router();
const zod = require("zod");
const JwtCode = require("../config");
const jwt = require('jsonwebtoken');
const { signupdb } = require("../../db");



const signinAuth = zod.object({
    email : zod.string().email().min("Invaild email"),
    password : zod.string().min(1 , "Please enter password")
})
router.post('/signin' , async function(req , res){
    const signinBody = req.body
    const inAuth = signinAuth.safeParse(signinBody)

    if (!inAuth.success){
        return res.status(411).json({
            msg : "Wrong input"
        })
    }

    const foundUser = await signupdb.findOne({
        email : req.body.email,
        password : req.body.password
    })

    if (!foundUser){
    return res.status(401).json({
            msg : "Unauthorized user Please go to signup page"
        })
    }

    const userId = foundUser._id

    const token = jwt.sign({
        userId
    }, JwtCode)

    return res.status(200).json({
        message : "You have successfully logged in",
        token : token
    })

})

module.exports = router;