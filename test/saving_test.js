// we dont need to require mocha, it will run automatically
// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe test for example
/* describe('some demo tests', () => {
    // create test 
    it('add two number together', () => {
        assert(2 + 3 === 5);
    });
}); */

// saving records
describe('Saving records', () => {
    // create test 
    it('Saves a record to the database', (done) => {

        var char = new MarioChar({
            name: 'Mario'
        });
        char.save().then( () => {
            assert(char.isNew === false);
            done();
        });

    });
});