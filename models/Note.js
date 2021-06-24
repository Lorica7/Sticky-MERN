const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const NoteSchema = new Schema({
    id: {
        type: Number,
        

    },
  title: {
    type: String,
    required: false,
    
  },
  description: {
    type: String,
    required: [true, 'The description field is required']
    },
    doesMatchSearch: {
        type: Boolean,
        default: true
  }
})

//create model for todo
const Notes = mongoose.model('todo', NoteSchema);

module.exports = Notes;