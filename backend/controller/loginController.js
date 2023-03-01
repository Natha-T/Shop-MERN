//const foundUser = require('../models/foundUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
require('dotenv').config();


const handleLogin = async (req, res) => {
    const {email,  password } = req.body;
    if (!email || !password) return res.status(401).json({ 'message': 'Email and password are required' });

     
    try {
    const foundUser = await User.findOne({ email: email }).exec();;
    if (!foundUser) return res.status(401).send('Invalid email');

    const validPassword = await bcrypt.compare(password, foundUser.password);
   if (!validPassword) return res.status(401).send('Invalid passsword.. .'); 



const token = jwt.sign(
   {email : foundUser.email},
       process.env.ACCESS_TOKEN,
        {expiresIn: '1d'});


res.cookie('jwt',token, {maxAge: 900000, httpOnly: true});



res.status(200).json({message : 'Successfully Login' , email : email , token : token});





 
   }

   catch (e) {
     
        console.log(e.message);
        res.status(400).json("invalid")
 
   }

}

module.exports = { handleLogin };