const mongoose = require('mongoose');

const dbConnection = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.kucqs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('DB Connected!'));
}

module.exports = dbConnection