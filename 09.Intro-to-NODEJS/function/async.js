const todos = require("./data");

const myTodos = () => {
  return new Promise((resolve, reject) => {
    //setTimeout(() => resolve(todos), 4000);
    resolve(todos);
  });
};

const getTodos = async () => {
  const data = await myTodos();
  console.log(data);
};

getTodos();
