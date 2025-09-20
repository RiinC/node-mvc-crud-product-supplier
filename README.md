# Node.js MVC CRUD: Product & Supplier

This project is a CRUD web application for managing suppliers and products, built with Node.js, Express, MongoDB, and Mongoose following the MVC architecture. It features Bootstrap for UI and Swagger for RESTful API documentation.

## Features
- Manage suppliers (name, address, phone)
- Manage products (name, price, quantity, supplier)
- Bootstrap-styled views
- RESTful API with Swagger documentation
- Environment configuration via `.env`

## Project Structure
- `models/` - Mongoose models for Product and Supplier
- `controllers/` - Business logic for CRUD operations
- `views/` - EJS templates for UI
- `public/` - Static assets (CSS)
- `app.js` - Main application entry point
- `.env` - Environment variables
- `.gitignore` - Ignore node_modules and sensitive files

## Getting Started
1. Clone the repository
2. Run `npm install`
3. Set up your `.env` file 
4. Start MongoDB locally
5. Run `npm start` or `node app.js`
6. Access the app at `http://localhost:3000`

## API Documentation
Swagger UI is available at `/api-docs` after starting the server.

## License
MIT
