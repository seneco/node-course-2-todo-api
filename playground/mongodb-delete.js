const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');
  

    db.collection('Users').findOneAndDelete({name: 'Bobby'}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2)); });
    // db.close();

});