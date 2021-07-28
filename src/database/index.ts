import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost:27017/testapi', { useNewUrlParser: true }).
  catch(error => console.log(error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We're connected!")
});