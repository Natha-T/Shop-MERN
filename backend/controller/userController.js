//const User = require('../models/user');
const bcrypt = require('bcrypt');
const  {User}  = require('../models/User');





const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({date: -1});
        if (!users) {
          return res.status(404).send('The user with the given ID was not found.');
        }
        else {
          res.send(users);
        } 
    } 
      catch (err) {
          console.log(err.message);
        } 
}

const getOneUser = async (req, res ) => {
    try {  
        const user = await User.find(req.params.id);
        if (!user) {
            return res.status(404).send('The user with the given ID was not found.');
        }
        res.send(user);
    }
    catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
}

/*

const createUser =  async  (req,res,next) => {
    const { email, username, password , roles} = req.params.body;
    if (!username || !password ||  !email   || !roles.length) { 
       return  res.status(404).json({message : 'User not found' });
    }

  try {
    const sameEmail =  User.findOne({ email }).lean().exec();
    if (sameEmail && sameEmail === email) { 
        return res.status(404).json({message : 'This email already exists in the database' });
            } 
       }  catch (err) { 
    res.status(404).json 
                } 


    const hashPassword =  bcrypt.hash(password , 10 ) 
    const userObject = { email , "password" : hashPassword , username , roles}
    const user =   User.create(userObject)


    if ( user ) {
       return  res.status(200).json({message : '${user} has been registrated' })
    } else  {
       return  res.status(404).json({message : 'User already exists in database' })
    }
}




const updateUser =  async  (req,res,next) => {

    const {id, email, username , roles} = req.params.body;
    if (!id|| !username ||  !email   || !roles.length) { 
        res.status(404).json({message : 'User not found' });}

    
    const user =  User.findById(id).exec()
    if (!user) { 
        return res.status(404).json({message: 'User not found' });
    } 


    const duplicate =  User.findOne({email: email, username: username}).lean().exac()
    if (!duplicate) { 
        return res.status(404).json({message: 'Duplicate user'});
    }


    user.username = username
    user.email = email
    user.roles = roles 


    const updateUser = user.save()
     return res.json({message: 'Updated user successfully ' + updateUser.   username   })

}




*/




const deleteUser = async  (req,res,next) => {
    const {id} = req.params.body;
    if (!id){
        return res.status(400).json({message: 'User ID is required'});
    }

    const user = await User.findById(id).exec()

    if (!user) { 
        return res.status(404).json({message: 'User not found'});
    }

    const result = await user.deleteOne

    const deletedUser = ' Username ${result.username} with email ${result.email} has been deleted }'

    res.json(deletedUser)

}



/*

module.exports = {
    getUser,    
    createUser,
    updateUser,
    deleteUser

}

*//*
const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (!user) {
            return res.status(404).send('The user with the given ID was not found.');
        }
        res.send(user);
    }
    catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
}

const getUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    res.json(user);
}
*/
module.exports = {
    getAllUsers,
    deleteUser,
    getOneUser
   
}
