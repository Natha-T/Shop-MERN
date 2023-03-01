const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    uid: { type: String, required: true },
    products: [
       {
        productID: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true }

        

        } 
    ]
   
},

{
    timestamps: true
});
 
const Cart = mongoose.model('Cart', cartSchema);
exports.Cart = Cart;