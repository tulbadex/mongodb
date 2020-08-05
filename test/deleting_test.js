const assert = require('assert');
const MarioChar = require('../models/mariochar');

// finding records
// let char;
describe('Deleting records', () => {
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

    // create test 
    it('Delete one record from the database', (done) => {

        MarioChar.findOneAndRemove({name: 'Mario'}).then( (result) => {
            MarioChar.findOne({name: 'Mario'}).then( (result) => {
                assert(result === null);
                done();
            });
            
        }).catch((err) => {
            //console.log(err);
            done(err);
        });
    });
    
});