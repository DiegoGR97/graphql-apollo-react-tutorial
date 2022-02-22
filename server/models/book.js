const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

// We're making a model (collection) called Book, which will
// have objects like the one defined in the bookSchema constant.
module.exports = mongoose.model("Book", bookSchema);
