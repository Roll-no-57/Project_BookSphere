const express = require('express');
const router = express.Router();
const DB_PUBLISHER = require('../Query/publisher-query');


// GET all publishers
// Path: GET /api/v1/publishers
router.get('/', async (req, res) => {
    try {
        const publishers = await DB_PUBLISHER.getAllPublishers();

        const result = {
            count: publishers.length,
            publishers: publishers
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// GET a publisher by id
// Path: GET /api/v1/publishers/:id
router.get('/:id', async (req, res) => {
    try {
        const publisher = await DB_PUBLISHER.getPublisherByID(req.params.id);
        if (publisher.length == 0) {
            res.status(404).json({ message: "Publisher not found" });
        } else {
            res.status(200).json({ publisher: publisher });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// POST a new publisher
// Path: POST /api/v1/publishers
router.post('/', async (req, res) => {
    try {
        const publisher = await DB_PUBLISHER.createPublisher(req.body);
        res.status(201).json({ message: "Publisher created successfully", publisher_id: publisher });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT a publisher by id
// Path: PUT /api/v1/publishers/:id
router.put('/:id', async (req, res) => {
    try {
        const publisher = await DB_PUBLISHER.updatePublisher(req.params.id, req.body);
        if (publisher == 0) {
            res.status(404).json({ message: "Publisher not found" });
        } else {
            res.status(200).json({ message: "Publisher updated successfully"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// DELETE a publisher by id
// Path: DELETE /api/v1/publishers/:id
router.delete('/:id', async (req, res) => {
    try {
        const publisher = await DB_PUBLISHER.deletePublisher(req.params.id);
        if (publisher == 0) {
            res.status(404).json({ message: "Publisher not found" });
        } else {
            res.status(200).json({ message: "Publisher deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;