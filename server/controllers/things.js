require('../models/thing')
const mongoose = require('mongoose'),
    Thing = mongoose.model("Thing");
module.exports = {
    index: (req, res) => {
        Thing.find().sort({name: 1})
            .then(result => res.json({ results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req, res) => {
        Thing.findOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json({ errors: err.errors  }));
    },
    create: (req, res) =>{
        Thing.create(req.body)
            .then(result => res.json({ results: result }))
            .catch( err => res.json({errors: err.errors}));
    },
    update: (req, res) => {
        Thing.findOneAndUpdate({_id: req.params.id},req.body,{runValidators: true,useFindAndModify: false})
            .then(result => res.json({ results : result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req,res) => {
        Thing.deleteOne({_id:req.params.id})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    }
}