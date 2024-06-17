// models/College.js

import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
  collegeId: { type: String, required: true },
  collegeName: { type: String, required: true },
  studentId: { type: String, required: true },
  deptId: { type: String, required: true }
}, {
  timestamps: true
});

const College = mongoose.model('College', collegeSchema);

export default College;
