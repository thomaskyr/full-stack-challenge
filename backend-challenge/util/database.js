const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://Tom:1234@cluster0.cr3ah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        )
        .then(client=> {
            console.log('Connected!')
            callback(client);
        })
        .catch(err=> {
            console.log(err);
        });
};

module.exports = mongoConnect;