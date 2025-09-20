const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();







// Swagger setup (after app is initialized)
const { swaggerUi, specs } = require('./swagger');


const app = express();

// Swagger route must be after app is initialized
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');
        // Only auto-seed in development
        if (process.env.NODE_ENV !== 'production') {
            try {
                const seed = require('./seed');
                await seed();
            } catch (e) {
                console.error('Seeding failed:', e);
            }
        }
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);

// Home redirect
app.get('/', (req, res) => res.redirect('/suppliers'));

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {//specifies port to listen on
    console.log('listening on ' + PORT);
    console.log(`Welcome to the Drug Monitor App at http://localhost:${PORT}`);
})