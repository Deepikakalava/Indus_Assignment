// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const { body, validationResult } = require('express-validator');


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const entries = [];

app.post('/submit-form', 
  // Define validation rules
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('contact').isMobilePhone().withMessage('Contact is not a valid phone number'),
  (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Return a 400 response with the errors
        return res.status(400).json({ errors: errors.array() });
      }
      // If no errors, proceed with the rest of the logic
      const { name, email, contact } = req.body;
      entries.push({ name, email, contact });
      res.json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


app.get('/get-entries', (req, res) => {
    res.json(entries);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



