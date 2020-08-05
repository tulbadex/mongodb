const assert = require('assert');
const MarioChar = require('../models/mariochar');

// finding records
// let char;
describe('Finding records', () => {
    var char;
    beforeEach( (done) => {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then( () => {
            done();
        }).catch((err) => {
            console.log(err);
        });
        
    });

    // find one by name 
    it('Find single record from the database', (done) => {
        //setTimeout(10000);

        MarioChar.findOne({name: 'Mario'}).then( (result) => {
            // console.log(result);
            assert(result.name === 'Mario');
            // assert.equal(char.name, 'Mario');
            done();
        }).catch((err) => {
            //console.log(err);
            done(err);
        });
    });

    // find one by id 
    it('Find single record by ID from the database', (done) => {
        //setTimeout(10000);

        MarioChar.findOne({_id: char._id}).then( (result) => {
            // console.log(result);
            assert(result._id.toString() === char._id.toString());
            // assert.equal(char.name, 'Mario');
            done();
        }).catch((err) => {
            //console.log(err);
            done(err);
        });
    });
    
});