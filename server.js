import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

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
      res.status(200).json(college);
    })
    .catch(err => {
      console.error('Error saving college:', err); // Log the error to debug
      res.status(400).send('Adding new college failed');
    });
});

// Define schema for student
const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  zip: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true }
}, {
  timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

// API route for adding a new student
app.post('/students', (req, res) => {
  console.log('Request body (student):', req.body); // Log the request body to debug

  const newStudent = new Student(req.body);
  
  newStudent.save()
    .then(student => {
      res.status(200).json(student);
    })
    .catch(err => {
      console.error('Error saving student:', err); // Log the error to debug
      res.status(400).send('Adding new student failed');
    });
});

// Define schema for login
const loginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

const Login = mongoose.model('Login', loginSchema);

// API route for handling login
app.post('/logins', (req, res) => {
  console.log('Request body (login):', req.body); // Log the request body to debug

  const newLogin = new Login(req.body);
  
  newLogin.save()
    .then(login => {
      res.status(200).json(login);
    })
    .catch(err => {
      console.error('Error saving login:', err); // Log the error to debug
      res.status(400).send('Login failed');
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
