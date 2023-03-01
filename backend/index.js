const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


const foods = require('./routes/foods')
const user = require('./routes/user')
const login = require('./routes/login')
const register = require('./routes/register')
const stripe = require('./routes/stripe')





require("dotenv").config()

const app = express();

app.use(cors({
    origin: 'https://foodappfront.onrender.com/',
    credentials: true,
 }));

app.use(express.json());
app.use(cookieParser());



const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 3002;



app.use("/foods", foods)
app.use("/foods/:id", foods)
app.use('/user', user);
app.use('/register', register);
app.use('/login', login);
app.use('/stripe', stripe);




app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  
});

mongoose.set('strictQuery', false);
mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
       console.log('Error connecting to MongoDB', err.message);
    });









