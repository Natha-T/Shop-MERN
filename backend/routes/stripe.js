
const express = require('express');
const stripe = require('stripe')('sk_test_51M8oTrHqufgigX2q6Bi0Uggzm48ukKOHhuVh9Syi1Qp7eVUCTOq4NFp3Ls2vnS9Qi3X0m57nSJHvqcHssuB3MUNy00OODIcvQj')

const { checkout } = require('./foods');
require("dotenv").config();


const router = express.Router()



router.post('/create-checkout-session', async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.email,
      cart: JSON.stringify(req.body.cart),
    },
  });


const line_items = req.body.cart.map(item => {
  return {
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images : [item.image], 
        metadata : {
          id : item.id,
        }
      },
      unit_amount: item.price * 100
    },
    quantity: item.quantity,

  }
});



    const session = await stripe.checkout.sessions.create({

      shipping_address_collection: {allowed_countries: ['US', 'CA', 'FR']},

      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {amount: 0, currency: 'usd'},
            display_name: 'Free Shipping',
            delivery_estimate: {
              minimum: {unit: 'business_day', value: 5},
              maximum: {unit: 'business_day', value: 7},
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {amount: 900, currency: 'usd'},
            display_name: 'Priority delivery',
            delivery_estimate: {
              minimum: {unit: 'business_day', value: 1},
              maximum: {unit: 'business_day', value: 3},
            },
          },
        },

        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {amount: 1500, currency: 'usd'},
            display_name: 'Normal delivery',
            delivery_estimate: {
              minimum: {unit: 'business_day', value: 3},
              maximum: {unit: 'business_day', value: 5},
            },
          },
        },
       
      ],

      phone_number_collection : {
        enabled: true
      },
      line_items,
      allow_promotion_codes: true,
      mode: 'payment',
      customer: customer.id,
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

  
    res.send({url: session.url})

  });


  module.exports = router;