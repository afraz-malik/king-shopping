const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const enforce = require('express-sslify')
const compression = require('compression')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'service-worker.js'))
})
// below line has been extracted from package.json
// "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname,  'client/build')));

//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname,  'client/build', 'index.html'));
//   });
// }
app.get('*', (req, res) => {
  res.json('This Server Contains Backend Code for King-shopping ')
})

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'usd',
  }
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send(stripeErr)
    } else {
      res.status(200).send(stripeRes)
    }
  })
})
app.listen(port, (error) => {
  if (error) throw error
  console.log('Server running on port ' + port)
})
