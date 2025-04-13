const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../../models/User')


// Register 
const register = async (req, res) => {
    const { username, email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    
    try{
        const newUser = new User({ username, email, password: hashPassword })
            await newUser.save()
            res.status(201).json({status: 201, message: 'User Registered successfully'})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false,
            message: "Error in Registeration! User not Registered "
        })
    }
}


// login
const login = async (req, res) => {
    try{

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Error in Login user"
        })
    }
}


// logout



// auth middleware
    
module.exports = { register }