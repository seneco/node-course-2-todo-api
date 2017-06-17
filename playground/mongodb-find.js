const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');
  

//    db.collection('Todos').find({_id: new ObjectID('5944f0f79c4ea51a0638fc61')}).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    })
    
//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    })

    db.collection('Users').find({name: 'Sven'}).count().then((count) => {console.log(count);}, (err) => {console.log('Fehler : ',err);});
    // db.close();

});