const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// List all products
router.get('/', productController.index);

// Show form to create new product
router.get('/new', productController.new);

// Create new product
router.post('/', productController.create);

// Show form to edit product
router.get('/:id/edit', productController.edit);

// Update product
router.post('/:id', productController.update);

// Delete product
router.post('/:id/delete', productController.delete);

module.exports = router;
