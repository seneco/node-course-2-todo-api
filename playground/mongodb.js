const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');
  
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        compeleted: false
//    }, (err, result) => { 
//        if (err) {
//            return console.log('Unable to insert todo');
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    })
//    db.close();
    
    db.collection('Users').insertOne({name: 'Sven', age: 44, location: 'Maulbronn'}, (err, result) => {
        if (err) {
            return console.log('Problem mit dem Datensatz ...');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    db.close();

});