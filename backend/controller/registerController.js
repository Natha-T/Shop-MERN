const bcrypt = require('bcrypt');
const { User } = require('../models/User');


const handleRegister = async (req, res) => {
   const {email, username, password} = req.body;
 if (!email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

  
    try {

    const duplicateUser = await User.findOne({ email: email }).exec();
   if (duplicateUser) return res.status(400).json({ 'message': 'Email already register try with another email' });; 
       const hashedPwd = await bcrypt.hash(password, 10);


        const result = await User.create({
         username,
         email,
         password: hashedPwd
        });

      return   res.status(201).json({ 'success': `New user ${username} created!`, 'data': result });
       

    } catch (err) {

        res.status(500).json({ 'message': err.message });

    }

}

module.exports = { handleRegister };