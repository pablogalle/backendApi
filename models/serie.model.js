const mongoose = require('mongoose');
const {Schema} = mongoose;

const serieSchema = new Schema({
    title: {type: String, required: true},
    images: [{type: String, required: false}],
    genres: [{
        name:{type: String, required: true, default: null},
        image:{type: String, default: null}
    }],
    num_episodes: {type: Number, required: true},
    year_of_emision: {type: Number, required: true},
    synopsis: {type: String, required: true, default: null},
    scores: [{
        email:{type: String, required: true},
        score:{type:Number, required:true}
    }]
});

module.exports = mongoose.model('Serie', serieSchema, 'series')