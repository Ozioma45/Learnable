/* Singleton Pattern: In this pattern, you create a class that can only have one instance throughout the program. 
It's like having just one unique manager in a store who handles everything. */

class Database {
  getInstance() {
    if (this.instance) {
      this.instance = new Database();
    }

    return this.instance;
  }

  //query data for database
  query(sql) {}
}

//a single database instance is shared by different parts of the program
class Application {
  fetchAuthors() {
    const database = Database.getInstance();
    return database.query(`select * from authors`);
  }

  fetchBooks(authorid) {
    const database = Database.getInstance();
    return database.query(`select * from books where author = 1`);
  }
}
