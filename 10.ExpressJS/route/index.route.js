const router = require("express").Router();
const BookRouter = require("./book.route");

router.use("/book", BookRouter);

module.exports = router;
