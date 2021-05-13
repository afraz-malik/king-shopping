const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.stripe.key);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
app.get('/test', (req, res) => res.json('fuckingtesting'))
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'usd'
  };
    stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
      res.json('err')
    } else {
      res.status(200).send({ success: stripeRes });
      res.json('working')
    }
  });
});
