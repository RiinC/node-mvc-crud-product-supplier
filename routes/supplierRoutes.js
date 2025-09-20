const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// List all suppliers
router.get('/', supplierController.index);

// Show form to create new supplier
router.get('/new', supplierController.new);

// Create new supplier
router.post('/', supplierController.create);

// Show form to edit supplier
router.get('/:id/edit', supplierController.edit);

// Update supplier
router.post('/:id', supplierController.update);

// Delete supplier
router.post('/:id/delete', supplierController.delete);

module.exports = router;
