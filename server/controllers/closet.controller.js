const Closet = require("../models/closet.model");

module.exports = {
    create: function(req, res){
        console.log("create method executed");
        Closet.create(req.body)
            .then((closet) => {
                res.json(closet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        console.log("getAll method executed");

        Closet.find()
            .then((closet) => {
                res.json(closet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params:",
        req.params);

        Closet.findById(req.params.id)
            .then((closet) => {
                res.json(closet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res){
        console.log("delete method executed", "url params:",
        req.params);

        Closet.findByIdAndDelete(req.params.id)
            .then((closet) => {
                res.json(closet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    update(req, res){
        console.log("update method executed", "url params:", 
        req.params);

        Closet.findByIdAndUpdate(req.params.id, req.
            body, {
                runValidators: true,
                new: true,
            })
            .then((closet) => {
                res.json(closet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
};