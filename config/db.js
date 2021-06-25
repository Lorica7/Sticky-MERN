 const { MongoClient } = require('mongodb');
const config = require('config');
const uri = config.get('mongoURI');

const connectDB = async () => {

 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	try {
		await client.connect(err => {
		 const collection = client.db("test").collection("devices");
		
			 });

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
	
	}
};



module.exports = connectDB;