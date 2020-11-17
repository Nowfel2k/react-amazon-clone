const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const API_KEY =
  "pk_test_51HdwdnF3y8SnAXvwRsirJ26c3YC8m4bq1zxrkqAXOCBdZJFvyd4r65WmvA8je11qophDtLV3s1VD4pUROBE4Wp4A00PfwRQNGX";
const stripe = require("stripe")(API_KEY);

// got from https://dashboard.stripe.com/test/dashboard

// (These are the thing we need to setup an API)
// API
// emulate to local for testing

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // to return json

// - API routes   (backend usually runs in 5000 in local)
app.get("/", (request, response) => response.status(200).send("hey there!")); // 200 is usually good

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // 201 is OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
