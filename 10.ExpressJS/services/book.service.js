const BookModel = require("../models/book.model");

class BookService {
  //create a book
  async create(bookData) {
    return await BookModel.create(bookData);
  }

  //edit a book
  async update(id, bookUpdate) {
    return await BookModel.findByIdAndUpdate(id, bookUpdate, {
      new: true,
    });
  }

  //delete a book
  async delete(id) {
    return await BookModel.findByIdAndDelete(id);
  }

  //get a single book
  async fetchOne(filter) {
    return await BookModel.findOne(filter);
  }

  //fetch all books
  async fetch(filter) {
    return await BookModel.find(filter);
  }
}

module.exports = new BookService();
