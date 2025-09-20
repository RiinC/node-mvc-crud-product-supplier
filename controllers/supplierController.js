const Supplier = require('../models/Supplier');

// List all suppliers
exports.index = async (req, res) => {
    const suppliers = await Supplier.find();
    res.render('suppliers/index', { suppliers });
};

// Show form to create new supplier
exports.new = (req, res) => {
    res.render('suppliers/new');
};

// Create new supplier
exports.create = async (req, res) => {
    const { name, address, phone } = req.body;
    await Supplier.create({ name, address, phone });
    res.redirect('/suppliers');
};

// Show form to edit supplier
exports.edit = async (req, res) => {
    const supplier = await Supplier.findById(req.params.id);
    res.render('suppliers/edit', { supplier });
};

// Update supplier
exports.update = async (req, res) => {
    const { name, address, phone } = req.body;
    await Supplier.findByIdAndUpdate(req.params.id, { name, address, phone });
    res.redirect('/suppliers');
};

// Delete supplier
exports.delete = async (req, res) => {
    await Supplier.findByIdAndDelete(req.params.id);
    res.redirect('/suppliers');
};
