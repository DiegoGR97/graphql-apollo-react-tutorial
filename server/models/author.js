const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

// We're making a model (collection) called author, which will
// have objects like the one defined in the authorSchema constant.
module.exports = mongoose.model("Author", authorSchema);
