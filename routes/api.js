const express = require ('express');
const router = express.Router();
const Note = require('../models/Note.js')


router.get('/',
  async (req, res) => {
    try {
      let allNotes = await Note.find({})
     res.send(allNotes)
  }
  catch (err) {
    console.log(err.message)
    res.status(500).send('server error')
    }
  
  });
  

router.post('/', 
async  (req, res) => {
   
  const { description, title, id } = req.body
  
  try {
     let newNote = await Note.create({
      title,
      description,
      id
    })
    newNote = await newNote.save()
    res.send(newNote)

  } catch (err) {
    console.log(err.message)
    res.status(500).send('server error')
    }
  
  });



router.get('/:id',
  async (req, res) => {

    try {
      let foundNote = await Note.findOne({ "_id": req.params.id })
      res.send(foundNote)
    }
    catch (err) {
      console.log(err.message)
      res.status(500).send('server error')
    }
  });
  
  router.delete('/:id', (req, res, next) => {
    Note.findOneAndDelete({"_id": req.params.id})
      .then(data => res.json(data))
      .catch(next)
  })
  
  module.exports = router;