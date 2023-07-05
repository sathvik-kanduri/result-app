const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

mongoose
  .connect('mongodb+srv://sathvik:Sathvik%402000@cluster0.ovlrsyr.mongodb.net/Byoa')
  .then(() => {
    console.log('The database is connected');
  })
  .catch((err) => {
    console.log('The error is', err);
  });

const corsOptions = {
  origin: 'https://result-portal.onrender.com',
  credentials: true, // Set credentials to true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', userRoute);

app.get('/too', (req, res) => {
  res.send('cookie');
});

app.get('/app', (req, res) => {
  res.send('welcome to results app');
});

app.listen(7000, () => {
  console.log('The port is 7000');
});