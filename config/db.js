//  const { MongoClient } = require('mongodb');


// const connectDB = async () => {

//  const client = new MongoClient(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
// 	try {
// 		await client.connect(err => {
// 		 const collection = client.db("test").collection("devices");
		
// 			 });

// 		console.log('MongoDB Connected...');
// 	} catch (err) {
// 		console.error(err.message);
// 		process.exit(1);
// 	}
// };



// module.exports = connectDB;
const mongoose = require('mongoose');

require('dotenv').config();



const connectDB = async () => {
	try {
		await mongoose.connect(process.env.mongoURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;