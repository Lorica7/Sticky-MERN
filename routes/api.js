const express = require ('express');
const router = express.Router();
const Note = require('../models/Note.js')

router.get('/notes', (req, res, next) => {

    //this will return all the data, exposing only the id and action field to the client
    Note.find({}, 'action')
      .then(data => res.json(data))
      .catch(next)
  });
  
  router.post('/notes', (req, res, next) => {
    if(req.body.action){
      Note.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }else {
      res.json({
        error: "Please enter a value"
      })
    }
  });
  
  router.delete('/notes/:id', (req, res, next) => {
    Note.findOneAndDelete({"_id": req.params.id})
      .then(data => res.json(data))
      .catch(next)
  })
  
  module.exports = router;