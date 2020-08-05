const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Establish connection with datatbase before test runs
// any code in before will run before the start of test
before( (done) => {
    // connect to mongodb
    mongoose.connect("mongodb://localhost/testdb", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false 
    });

    // listening to connection event once when the connection is open
    mongoose.connection.once('open', () => {
        console.log('Connection made');
        done();
    }).on('error', (error) => {
        console.log(error);
    });
});

// Drop the collection before each test
beforeEach( (done) => {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop( () => {
        done();
    });
});
