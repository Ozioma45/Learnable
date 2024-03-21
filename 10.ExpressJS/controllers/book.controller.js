const BookService = require("../services/book.service");

class BookController {
  //Create a book

  async createBook(req, res) {
    const reqBody = req.Body;

    //Check if the Book exist

    //if not, Create a new book and send a response

    const existingBook = await BookService.fetchOne({
      name: reqBody.name.toLowercase(),
    });

    if (existingBook)
      res.status(403).json({
        success: false,
        message: "Book already Exist",
      });

    const newBook = await BookService.create(reqBody);

    res.status(201).json({
      success: true,
      message: "Book Created Successfully",
      data: newBook,
    });
  }

  //Update a book
  async updateBook(req, res) {
    const bookId = req.params;
    const updateData = req.Body;

    //check if the book to edit exist in the database
    const existingBook = await BookService.fetchOne({
      _id: bookId,
    });
    if (!existingBook)
      res.status(403).json({
        success: false,
        message: "book to edit do not exist",
      });

    //since the name is a unique key we have to make it consistent
    if (updateData.name) {
      const existingBookWithUpdateBook = await BookService.fetchOne({
        name: updateData.name.toLowercase(),
      });

      if (existingBookWithUpdateBook._id === existingBook._id.toString()) {
        res.status(403).json({
          success: false,
          message: "book with update name already exist",
        });
      }
    }

    const updatedData = await BookService.update(bookId, updateData);

    res.status(200).json({
      success: true,
      message: "Book Created Successfully",
      data: newBook,
    });
  }

  //Delete a book
  //Fetch a single book
  //Fetch many book
}
