const assert = require('assert');
const mongoose = require('mongoose');
const MarioChar = require('../models/author');
const Author = require('../models/author');

// Dedcribe our test
describe('Nesting records', () => {
    beforeEach( (done) => {
        mongoose.connection.collections.authors.drop( () => {
            done();
        });
    });

    // create test 
    it('Create an author with sub document', (done) => {

        var pat = new Author({
            name: 'Adedayo Ibrahim',
            books: [{
                title: 'Name of wind',
                pages: 400
            }]
        });
        pat.save().then( () => {
            Author.findOne({ name: 'Adedayo Ibrahim'}).then( (record) => {
                assert(record.books.length === 1);
                done();
            });
        }).catch((err) => {
            //console.log(err);
            done(err);
        });

    });

    it('Add a book to an author', (done) => {
        var pat = new Author({
            name: 'Adedayo Ibrahim',
            books: [{
                title: 'Name of wind',
                pages: 400
            }]
        });

        pat.save().then( () => {
            Author.findOne({ name: 'Adedayo Ibrahim'}).then( (record) => {
                // add book to the book array
                record.books.push({ title: "Wise Man's Fear", pages: 500});
                record.save().then( () => {
                    Author.findOne({ name: 'Adedayo Ibrahim'}).then( (result) => {
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        }).catch((err) => {
            //console.log(err);
            done(err);
        });
    });

    
});