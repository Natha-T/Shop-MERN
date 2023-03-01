const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    products: [
       {
        productID: { type: String, required: true },
        quantity: { type: Number, required: true }
        } 
    ],
    amount: { type: Number, required: true },
    address : { type: String, required: true },
    status : { type: String, default: 'pending' }
},

{
    timestamps: true
});
 

const Order = mongoose.model('Order', orderSchema);
exports.Order = Order;