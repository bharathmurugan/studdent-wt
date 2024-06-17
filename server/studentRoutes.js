// routes/studentRoutes.js

import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

// API route for adding a new student
router.post('/', (req, res) => {
  console.log('Request body (student):', req.body);

  const newStudent = new Student(req.body);
  
  newStudent.save()
    .then(student => {
      res.status(200).json(student);
    })
    .catch(err => {
      console.error('Error saving student:', err);
      res.status(400).send('Adding new student failed');
    });
});

export default router;
