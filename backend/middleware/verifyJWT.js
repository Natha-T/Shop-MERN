
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

let headers = req.headers.cookie


   // res.status(200).send('headers: ' + headers);
 
let token = req.headers
let cookie = req.cookie

console.log(token);
console.log(cookie);
console.log(headers);


   jwt.verify(token,process.env.ACCESS_TOKEN, (err, data) => {

            if (err){
                throw Error("user not authorized")
            } //invalid token
            console.log(data);
         
            next();
        });
 


}
module.exports = verifyJWT