const express = require("express");
const fs = require("firebase-admin");
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const serviceAccount = require("./weruportfolioblog-03912ab23b4c.json");
const { json } = require("express");

const app = express();
var jsonParser = bodyParser.json();

app.use(cors());

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
});
const db = fs.firestore();

app.post("/task", jsonParser, async (req, res) => {
  try {
    const taskDb = db.collection("task");
    const taskDoc = taskDb.doc(req.body.title);
    await taskDoc.set(req.body);
    res.send({ status: "SUCCESS" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
