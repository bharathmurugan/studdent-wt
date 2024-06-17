const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studb', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define schema for login details
const loginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

const Login = mongoose.model('Login', loginSchema);

// API route for adding a new login
app.post('/logins', (req, res) => {
  console.log('Request body (login):', req.body); // Log the request body to debug

  const newLogin = new Login(req.body);
  
  newLogin.save()
    .then(login => {
      console.log('Login details added successfully:', login);
      res.status(200).json(login);
    })
    .catch(err => {
      console.error('Error saving login:', err); // Log the error to debug
      res.status(500).send('Error saving login details');
    });
});

// Define schema for college
const collegeSchema = new mongoose.Schema({
  collegeId: { type: String, required: true },
  collegeName: { type: String, required: true },
  studentId: { type: String, required: true },
  deptId: { type: String, required: true }
}, {
  timestamps: true
});

const College = mongoose.model('College', collegeSchema);

// API route for adding a new college
app.post('/colleges', (req, res) => {
  console.log('Request body (college):', req.body); // Log the request body to debug

  const newCollege = new College(req.body);
  
  newCollege.save()
    .then(college => {
      console.log('College details added successfully:', college);
      res.status(200).json(college);
    })
    .catch(err => {
      console.error('Error saving college:', err); // Log the error to debug
      res.status(500).send('Error saving college details');
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
