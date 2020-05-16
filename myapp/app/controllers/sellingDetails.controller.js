const SellingDetails = require('../models/selling_details');


// POST a sellingDetails
exports.create = (req, res) => {
    // Create a sellingDetails
    const sellingDetails = new SellingDetails(req.body);

    // Save a sellingDetails in the MongoDB
    sellingDetails.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};


// FETCH all sellingDetails
exports.findAll = (req, res) => {
    SellingDetails.find()
    .then(sellingDetails => {
        res.json(sellingDetails);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};


// FIND a sellingDetails
exports.findOne = (req, res) => {
    SellingDetails.findById(req.params.sellingDetailsId)
    .then(sellingDetails => {
        if(!sellingDetails) {
            return res.status(404).json({
                msg: "sellingDetails not found with id " + req.params.sellingDetailsId
            });            
        }
        res.json(sellingDetails);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "sellingDetails not found with id " + req.params.sellingDetailsId
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving sellingDetails with id " + req.params.sellingDetailsId
        });
    });
};

// UPDATE a sellingDetails
exports.update = (req, res) => {
    // Find sellingDetails and update it
    SellingDetails.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(sellingDetails => {
        if(!sellingDetails) {
            return res.status(404).json({
                msg: "SellingDetails not found with id " + req.params.sellingDetailsId
            });
        }
        res.json(sellingDetails);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "SellingDetails not found with id " + req.params.sellingDetailsId
            });                
        }
        return res.status(500).json({
            msg: "Error updating SellingDetails with id " + req.params.sellingDetailsId
        });
    });
};

// DELETE a sellingDetails
exports.delete = (req, res) => {
    SellingDetails.findByIdAndRemove(req.params.sellingDetailsId)
    .then(sellingDetails => {
        if(!sellingDetails) {
            return res.status(404).json({
                msg: "SellingDetails not found with id " + req.params.sellingDetailsId
            });
        }
        res.json({msg: "SellingDetails deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "SellingDetails not found with id " + req.params.sellingDetailsId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete SellingDetails with id " + req.params.sellingDetailsrId
        });
    });
};