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
  connectTimeoutMS: 30000,
  keepAlive: 1,
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

  app.get("/message", (req, res) => {
    if (req.query.email) {
      return messageCollection
        .find({ email: req.query.email })
        .toArray((err, docs) => res.send(docs[0]));
    }

    messageCollection.find({}).toArray((err, docs) => res.send(docs));
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

  app.post("/addOrder", (req, res) => {
    orderCollection
      .insertOne(req.body)
      .then((result) => res.send(!!result.insertedCount));
  });

  app.post("/addMessage", (req, res) => {
    messageCollection
      .insertOne(req.body)
      .then((result) => res.send(!!result.insertedCount));
  });

  // Update Method Controllers

  app.patch("/updateOrderStatus", (req, res) => {
    const { id, status, progress } = req.body;
    console.log(req.body);
    orderCollection
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        {
          $set: { status, progress },
        }
      )
      .then((result) => res.send(result.lastErrorObject.updatedExisting));
  });

  app.patch("/update/:id", (req, res) => {
    serviceCollection
      .updateOne(
        { _id: ObjectId(req.params.id) },
        {
          $set: req.body,
        }
      )
      .then((result) => res.send(!!result.modifiedCount));
  });

  // Delete Method Controllers

  app.delete("/delete/:id", (req, res) => {
    serviceCollection
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => res.send(!!result.deletedCount));
  });

  //End of controller
});

app.listen(port, (err) =>
  err
    ? console.log("Filed to Listen on Port", port)
    : console.log("Listing for Port", port)
);
