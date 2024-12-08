const express = require('express');
const stripe = require('stripe')('sk_test_51Q5Vy72N9ZRnb1QYmbRA4Le1CKlc4JkaAMTy9y8vN8zfpqWrSq7msYvSBonJZgjndtmLrLQszhJd4XJaENRRBaHD00f955s3mW'); // Replace with your secret key
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/charge', async (req, res) => {
  const { paymentMethodId, plan } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 4999, // Price in cents ($49.99)
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.send({ success: true, paymentIntent });
  } catch (error) {
    res.status(400).send({ error: { message: error.message } });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
