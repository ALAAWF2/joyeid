require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve the static frontend files

// API Route for Checkout
app.post('/api/checkout', (req, res) => {
    const { cartItems, totalValue } = req.body;

    // In a real application, you would connect to a database here
    // and integrate a payment gateway (e.g. Moyasar, Salla APIs, PayTabs, etc)
    // For now, we simulate order creation:
    console.log('============ NEW ORDER RECEIVED ============');
    console.log(`Total Amount: ${totalValue} SAR`);
    console.log('Items:');
    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            console.log(`  - ${item.name} (${item.price})`);
        });
    } else {
        console.log('  Cart is empty.');
    }
    console.log('=============================================');

    // Respond with a mock success message and an order ID
    const randomOrderId = Math.floor(Math.random() * 100000) + 1000;
    res.json({
        success: true,
        message: 'Order received successfully.',
        orderId: `ORD-${randomOrderId}`
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Awaiting checkout requests at /api/checkout');
});
