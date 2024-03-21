function testMiddleware(req, res, next) {
  console.log("i am now in the test middleware");
  next();
}

module.exports = testMiddleware;
