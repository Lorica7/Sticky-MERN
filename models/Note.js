const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
    id: {
    type: String,
      unique: true
    },
  title: {
    type: String,
    required: false,
    
  },
  description: {
    type: String,
    required: true
    }
  
})

const Notes = mongoose.model('note', NoteSchema);

module.exports = Notes;