const Ins = require('../models/insurance.model.js');

// Create and Save a new Insurance
exports.create = (req, res) => {
 // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Insurance content cannot be empty"
        });
    }

    // Create a Ins
    const ins = new Ins({
        Aadhar: req.body.Aadhar || "Untitled Note", 
        Name: req.body.Name
    });

    // Save Note in the database
    ins.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};



// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

	Ins.find()
    .then(insurance => {
        res.send(insurance);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};





// Find a single note with a noteId

exports.findOne = (req, res) => {
    Ins.findById(req.params.noteId)
    .then(ins => {
        if(!ins) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.send(ins);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified noteId in the request
//exports.delete = (req, res) => {

//};
