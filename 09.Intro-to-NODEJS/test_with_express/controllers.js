const person = require("./PersonModel");

class Controller {
  async getAllPersons() {
    return await Person.find({}, "-__v");
  }

  async addPerson(person) {
    return await person.create(person);
  }

  async getUserById(id) {
    return await Person.findOne({ _id: id });
  }

  async editUserById(id, data) {
    return await Person.findOneAndUpdate({ _id: id }, data);
  }

  async deleteUserById(id) {
    return await Person.findOneAndDelete({ _id: id });
  }
}

module.exports = new Controller();
