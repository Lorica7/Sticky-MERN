const express = require('express');
const routes = require('./routes/api.js');
const connectDB = require('./config/db.js')
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
connectDB()



mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json({extended: false}));

app.use('/api', routes);

// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// app.use(express.static('client/public'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
// });

app.get('/', (req, res) => res.send('API Running'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});