const Product = require('../models/Products');
const Supplier = require('../models/Supplier');

// List all products
exports.index = async (req, res) => {
    const products = await Product.find().populate('supplier');
    res.render('products/index', { products });
};

// Show form to create new product
exports.new = async (req, res) => {
    const suppliers = await Supplier.find();
    res.render('products/new', { suppliers });
};

// Create new product
exports.create = async (req, res) => {
    const { name, price, quantity, supplier } = req.body;
    await Product.create({ name, price, quantity, supplier });
    res.redirect('/products');
};

// Show form to edit product
exports.edit = async (req, res) => {
    const product = await Product.findById(req.params.id);
    const suppliers = await Supplier.find();
    res.render('products/edit', { product, suppliers });
};

// Update product
exports.update = async (req, res) => {
    const { name, price, quantity, supplier } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, price, quantity, supplier });
    res.redirect('/products');
};

// Delete product
exports.delete = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
};
