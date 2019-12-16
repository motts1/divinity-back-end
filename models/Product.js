// This is where the instructor builds the cases to be served to the class

const mongoose = require("mongoose");
const CaseSchema = new mongoose.Schema({
  id: String,
  quarter: Number,
  // this number is used to match a minicase to a certain quarter.  
  case: String,
  description: String,
  type: String,
  // type: multiple choice, input? Multiple, multiple choice? Meaning people can pick 2, 3 or even 4 options. Or none at all.
  options: Array,
  // each options object has multiple attributes
  // {id: 0, title, description, cashFlow: 'positive' || 'negative', cash: the amount of money affected, 'category': where is the cash going?, board: details + or - how board would feel}
  order: Array,
  // some minicases will ask you to prioritize the tasks that your management takes on, for those we will need to create an Array that orders those choices based on our students decisions. Those will then be used, somehow, to calculate an output. 
  outputs: Array,
  // An array, or object, with a list of outcomes. Random expenses increases, legal, medical, anything that matters. 
  justification: String,
  board: String,
  // the board attitude could either go up, or down, depending on the choice picked. 
});
module.exports = mongoose.model("Case", CaseSchema);

// Are each group in the club meeting going to have the same simulation?
 