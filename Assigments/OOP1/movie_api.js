class Movie {
  constructor(title) {
    this.title = title;
    this.available = true;
  }

  toRentTheMovie() {
    if (this.available) {
      this.available = false;
      console.log(`Enjoy Your movie! "${this.title}"`);
    } else {
      console.log(`Sorry, "${this.title}" is not availabl for rent.`);
    }
  }

  toReturnMovie() {
    if (!this.available) {
      this.available = true;
      console.log(`Thanks for returning "${this.title}"`);
    } else {
      console.log(`"${this.title}" is already available. `);
    }
  }
}

class movieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
    console.log(`"${movie.title}" has been added to the store. `);
  }

  listMovies() {
    console.log("Movies available in the store: ");
    this.movies.forEach((movie) => {
      console.log(
        `- ${movie.title} - ${movie.available ? "Available" : "Not Available"}`
      );
    });
  }

  rentMovie(title) {
    const movie = this.movies.find((m) => m.title === title);

    if (movie) {
      movie.toRentTheMovie();
    } else {
      console.log(`${title} is not found in the store. `);
    }
  }

  returnMovie(title) {
    const movie = this.movies.find((m) => m.title === title);

    if (movie) {
      movie.toReturnMovie();
    } else {
      console.log(`${title} is not in the store`);
    }
  }
}

//Example
//to create your store
const myStore = new movieStore();

//to add movie to the store
const movie1 = new Movie("Black Adam");
const movie2 = new Movie("Avengers");
const movie3 = new Movie("Mission Impossible");

myStore.addMovie(movie1);

myStore.listMovies();

myStore.rentMovie("Black Adam");

myStore.listMovies();

myStore.returnMovie("Black Adam");

myStore.listMovies();
