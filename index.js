const express = require('express');
const routes = require('./routes/api');
const connectDB = require('./config/db.js')
const path = require('path');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
connectDB()
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://root:root@clustertasks.9hj1o.mongodb.net/Tasks?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongoose.Promise = global.Promise;

// app.use(function (req, res, next) {
//     var allowedOrigins = ['http://localhost:3000', 'http://tv-observer.herokuapp.com'];
//     var origin = req.headers.origin;
//     if(allowedOrigins.indexOf(origin) > -1){
//          res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     res.setHeader('Access-Control-Allow-Headers', 'content-type');
//     next();
//   });



app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(express.static('client/public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});