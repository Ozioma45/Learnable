const router = require("express").Router();
const BookRouter = require("./book.route");
const testMiddleware = require("../middlewares/test.middleware");

router.use("/book", testMiddleware, BookRouter);

module.exports = router;
