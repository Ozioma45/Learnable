function getRegData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      //listen to dta sent to client
      req.on("data", (chunk) => {
        //append the string version to the ody
        body += chunk.toString();
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { getRegData };
