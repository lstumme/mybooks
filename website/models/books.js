const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:              {type: String, required: true },
    authors:            {type: String, required: false},
    editor:             {type: String, required: false},
    publicationDate:    {type: String, required: false},
    description:        {type: String, required: false},
    isbn:               {type: Number, required: false},
    quantity:           {type: Number, required: true },
    subtitle:           {type: String, required: false},
    urlImage:           {type: String, required: false}
});

module.exports = mongoose.model('Book', bookSchema);