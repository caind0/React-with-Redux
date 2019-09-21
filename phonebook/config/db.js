const mongooes = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//
const connectDB = async () => {

    try {
        mongooes.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDb Connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
  
}

module.exports = connectDB;