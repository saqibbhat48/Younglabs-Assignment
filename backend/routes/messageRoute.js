const express = require('express');
const router = express.Router();

// Greeting endpoint
router.get('/', (req, res) => {
    const name = req.query.name;
    
    if (!name) {
        return res.status(400).json({
            error: "Name is required."
        });
    }
    
    res.json({
        message: `Hello, ${name}! Welcome to Younglabs.`
    });
});

module.exports = router;