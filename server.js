// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const entries = [];
const phoneNumbers = new Set(); // In-memory data store for phone numbers

app.post('/submit-form', (req, res) => {
    try {
        const { name, email, contact } = req.body;

        if (phoneNumbers.has(contact)) {
            return res.status(400).json({ error: 'Phone number already exists. Please enter a different phone number.' });
        }

        // If the phone number is unique, add it to the data store
        phoneNumbers.add(contact);
        entries.push({ name, email, contact });
        res.json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).json({ error: ' Internal server error' })
    }
});

app.get('/get-entries', (req, res) => {
    res.json(entries);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
