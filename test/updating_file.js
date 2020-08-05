const assert = require('assert');
const MarioChar = require('../models/mariochar');

// finding records
// let char;
describe('Updating records', () => {
    var char;
    beforeEach( (done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save().then( () => {
            done();
        }).catch((err) => {
            console.log(err);
        });
        
    });

    // create test 
    it('Update one record in the database', (done) => {

        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Lacoss'}).then( () => {
            MarioChar.findOne({_id: char._id}).then( (result) => {
                assert(result.name === 'Lacoss');
                done();
            });
            
        }).catch((err) => {
            //console.log(err);
            done(err);
        });
    });

    // update weight 
    it('Update one record and increment the weight by 1 in the database', (done) => {

        MarioChar.updateMany({}, { $inc: { weight: 1 } }).then( () => {
            MarioChar.findOne({ name: 'Mario'}).then( (result) => {
                assert(result.weight === 51);
                done();
            });
            
        }).catch((err) => {
            //console.log(err);
            done(err);
        });
    });
    
});