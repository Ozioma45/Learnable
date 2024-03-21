const router = require("express").Router();
const {
  createBook,
  updateBook,
  deleteBook,
  fetchOneBook,
  fetchMany,
} = require("../controllers/book.controller");

router.post("/", createBook);
router.patch("/:id", updateBook);
router.delete("/id", deleteBook);
router.get("/id", fetchOneBook);
router.get("/", fetchMany);

module.exports = BookRouter;
