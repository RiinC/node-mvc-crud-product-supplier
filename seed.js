
const Supplier = require('./models/Supplier');
const Product = require('./models/Products');

async function seed() {
    // Remove old data
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    // Create suppliers
    const suppliers = await Supplier.insertMany([
        { name: 'Everest Imports Ltd.', address: '1500 Market Street, San Francisco, CA', phone: '+1-415-555-0123' },
        { name: 'GreenField Wholesale', address: '22 High Street, Manchester, UK', phone: '+44-161-555-0456' },
        { name: 'Pacific Trade Group', address: '88 George St, Sydney, NSW', phone: '+61-2-5550-7890' }
    ]);

    // Create products (10)
    const products = [
        { name: 'Organic Basmati Rice (5kg)', price: 18.99, quantity: 100, supplier: suppliers[0]._id },
        { name: 'Matcha Green Tea Powder (200g)', price: 12.50, quantity: 200, supplier: suppliers[1]._id },
        { name: 'Premium Olive Oil (750ml)', price: 15.00, quantity: 300, supplier: suppliers[2]._id },
        { name: 'Whole Wheat Pasta (1kg)', price: 4.99, quantity: 400, supplier: suppliers[0]._id },
        { name: 'Himalayan Pink Salt (500g)', price: 6.75, quantity: 500, supplier: suppliers[1]._id },
        { name: 'Dark Chocolate (85%, 100g)', price: 3.50, quantity: 600, supplier: suppliers[2]._id },
        { name: 'Roasted Almonds (250g)', price: 7.20, quantity: 700, supplier: suppliers[0]._id },
        { name: 'Colombian Coffee Beans (500g)', price: 13.95, quantity: 800, supplier: suppliers[1]._id },
        { name: 'Natural Peanut Butter (1kg)', price: 9.99, quantity: 900, supplier: suppliers[2]._id },
        { name: 'Sparkling Mineral Water (6x1L)', price: 11.25, quantity: 1000, supplier: suppliers[0]._id }
    ];

    await Product.insertMany(products);

    console.log('Seed data created!');
}

module.exports = seed;
