const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
    id: {
    type: Number,
      unique: true
    },
  title: {
    type: String,
    required: false,
    
  },
  description: {
    type: String,
    required: [true, 'The description field is required']
    }
  
})

const Notes = mongoose.model('todo', NoteSchema);

module.exports = Notes;