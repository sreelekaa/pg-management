const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const GuestModel = require('./models/Guest'); // Make sure you have defined the Guest model
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Guest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to the database");
}).catch(err => {
  console.error("Error connecting to the database", err);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === 'Sreeleka' && password === 'sreeleka11'|| username === 'Sasmitha' && password === 'sasmitha05') {
    return res.json("Admin Success");
  }

  GuestModel.findOne({ username: username })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong Password");
        }
      } else {
        res.json("User Not Found");
      }
    })
    .catch(err => res.status(500).json("Server Error"));
});

app.post('/signup', (req, res) => {
  GuestModel.create(req.body)
    .then(guest => res.json(guest))
    .catch(err => res.status(500).json(err));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
