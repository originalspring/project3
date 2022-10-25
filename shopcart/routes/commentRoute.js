const express = require ('express');
const router = express.Router();
const Comment = require ("../models/commentModel")

router.route("/create").post((req,res)=>{
  const title = req.body.title;
  const content = req.body.content;
  const newComment = new Comment({content});

  newComment.save();

});

router.route('/comment').get((req,res)=>{
  Comment.find()
         .then(foundComment => res.json(foundComment))




})

module.exports = router;