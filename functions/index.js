const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IUV1bEv8aHFRylOHFvI4j4KXWIL6ZcgPzn1NZaQs3KMQQ6voHrDOjM5GKLdA6DyntiNoL0tZMBGeiM3fs69rDJX00MIlkOoAG"
);

//API

//APP Config
const app = express();

//Middiewares
app.use(cors({ origan: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World!!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("THE PAYMENT REQUEST Amount>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen comment
exports.api = functions.https.onRequest(app);

//http://localhost:5001/ecommerce-app-e9e30/us-central1/api
