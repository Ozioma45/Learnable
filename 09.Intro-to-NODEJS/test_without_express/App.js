//A module imported from the node module, is always inside a quote and without slashes or dots
const http = require("http");
const Todo = require("./controller");
const { getRegData } = require("./utis");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  // /api/vl/todos : GET
  if (req.url === "/api/vl/todos" && req.method === "GET") {
    //get the todos
    const todos = await Todo.getTodos();
    //set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    //send the data
    res.end(JSON.stringify(todos));
  }

  // /api/vl/todos/:id: GET
  else if (
    req.url.match(/\/api\/vl\/todos\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    try {
      //get id from url
      const id = req.url.split("/")[4];
      //get todo
      const todo = await Todo.getTodo(id);
      //set the status code and content-type
      res.writeHead(200, { "Content-Type": "application/json" });
      //send the data
      res.end(JSON.stringify(todo));
    } catch (error) {
      //set the status code and content-type
      res.writeHead(404, { "Content-Type": "application/json" });
      //send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // /api/vl/todos/:id : DELETE
  else if (
    req.url.match(/\/api\/vl\/todos\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    try {
      //get the id from url
      const id = req.url.split("/")[4];
      //delete todo
      let message = await Todo.deleteTodo(id);
      //set the status code and content-type
      res.writeHead(200, { "Content-Type": "application/json" });
      //send the message
      res.end(JSON.stringify({ message }));
    } catch (error) {
      //set the status code and content-type
      res.writeHead(404, { "Content-Type": "application/json" });
      //send te error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // /api/vl/todos/:id : UPDATE
  else if (
    req.url.match(/\/api\/vl\/todos\/([0-9]+)/) &&
    req.method === "PATCH"
  ) {
    try {
      //get the id from url
      const id = req.url.split("/")[4];
      //update todo
      let updated_todo = await Todo.updateTodo(id);
      //set the status code and content-type
      res.writeHead(200, { "Content-Type": "application/json" });
      //send the message
      res.end(JSON.stringify({ updated_todo }));
    } catch (error) {
      //set the status code and content-type
      res.writeHead(404, { "Content-Type": "application/json" });
      //send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  //No route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
