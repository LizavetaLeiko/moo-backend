require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require('./router/index')

const app = express();

app.setMaxListeners(0)

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL, 'http://localhost:3000']
}));
app.use('/api', router);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`server on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
