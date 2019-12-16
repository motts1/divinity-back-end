const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  school: String,
  teams: Array,
  role: String,
  email: String,
  notes: Array,
  enrollmentDate: Date
});
module.exports = mongoose.model("User", UserSchema);

// create handle submit for each form to console request body
