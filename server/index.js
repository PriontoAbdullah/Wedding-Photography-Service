const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Weeding Photography");
});

// Database Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xw1ix.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  // initialize all connections
  const serviceCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection("services");
  const messageCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection("messages");
  const orderCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection("orders");
  const adminsCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection("admins");

  // Get Method Controllers

  app.get("/services", (req, res) => {
    serviceCollection.find({}).toArray((err, docs) => res.send(docs));
  });

  app.get("/orders", (req, res) => {
    adminsCollection.find({ email: req.query.email }).toArray((err, docs) => {
      if (docs.length) {
        orderCollection.find({}).toArray((err, docs) => res.send(docs));
      } else {
        orderCollection
          .find({ email: req.query.email })
          .toArray((err, docs) => res.send(docs));
      }
    });
  });

  app.get("/isAdmin", (req, res) => {
    adminsCollection
      .find({ email: req.query.email })
      .toArray((err, docs) => res.send(!!docs.length));
  });

  // Post Method Controllers

  app.post("/addService", (req, res) => {
    serviceCollection
      .insertOne(req.body)
      .then((result) => res.send(!!result.insertedCount));
  });

  app.post("/addAdmin", (req, res) => {
    adminsCollection
      .insertOne(req.body)
      .then((result) => res.send(!!result.insertedCount));
  });

  //End of controller
});

app.listen(port, (err) =>
  err
    ? console.log("Filed to Listen on Port", port)
    : console.log("Listing for Port", port)
);
