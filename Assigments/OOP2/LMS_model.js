//define class
class User {
  constructor(userId, username) {
    this.userId = userId;
    this.username = username;
  }
}

class Student extends User {
  constructor(userId, username) {
    super(userId, username);
    this.enrolledCourses = [];
    this.lessonsCompleted = 0;
    this.totalLessons = 0;
  }

  subscribeToCourse(course) {
    this.enrolledCourses.push(course);
    this.totalLessons += course.content.length;
    console.log(
      `${this.username} has subscribed to the course: ${course.title}`
    );
  }

  viewEnrolledCourses() {
    console.log(
      `${this.username}'s Enrolled Courses:`,
      this.enrolledCourses.map((course) => course.title)
    );
  }

  viewCourseContent(course) {
    console.log(`Course Content for ${course.title}:`, course.content);
  }

  markLessonAsCompleted(lesson) {
    this.lessonsCompleted++;
    console.log(
      `Marking lesson "${lesson.title}" as completed for ${this.username}`
    );
  }

  trackProgress() {
    const progressPercentage =
      (this.lessonsCompleted / this.totalLessons) * 100;
    console.log(
      `${this.username}'s Progress: ${progressPercentage.toFixed(2)}%`
    );
  }
}

class Tutor extends User {
  constructor(userId, username) {
    super(userId, username);
    this.courses = [];
  }

  createCourse(title) {
    const course = new Course(title);
    console.log(`Course "${title}" created by ${this.username}`);
    this.courses.push(course);
    return course;
  }

  uploadContent(course, content) {
    course.addContent(content);
    console.log(
      `Content uploaded to course "${course.title}" by ${this.username}`
    );
  }

  monitorStudentProgress(student, course) {
    const progress = course.getStudentProgress(student);
    console.log(
      `Monitoring progress for ${student.username} in course "${course.title}": ${progress}`
    );
  }
}

class Administrator extends User {
  constructor(userId, username) {
    super(userId, username);
    this.courseDatabase = [];
    this.issuesDatabase = [];
  }

  //to manage the users
  createUser(username) {
    const newUser = new User(this.userDatabase.length + 1, username);
    this.userDatabase.push(newUser);
    console.log(`User account created: ${username}`);
    return newUser;
  }

  updateUser(userId, newUsername) {
    const userToUpdate = this.userDatabase.find(
      (user) => user.userId === userId
    );
    if (userToUpdate) {
      userToUpdate.username = newUsername;
      console.log(`User account updated: ${userToUpdate.username}`);
    } else {
      console.log(`User not found with ID: ${userId}`);
    }
  }

  deleteUser(userId) {
    const index = this.userDatabase.findIndex((user) => user.userId === userId);
    if (index !== -1) {
      const deletedUser = this.userDatabase.splice(index, 1)[0];
      console.log(`User account deleted: ${deletedUser.username}`);
    } else {
      console.log(`User not found with ID: ${userId}`);
    }
  }

  listUsers() {
    console.log("List of Users:");
    this.userDatabase.forEach((user) =>
      console.log(`ID: ${user.userId}, Username: ${user.username}`)
    );
  }

  //to manage course
  createCourse(title) {
    const course = new Course(title);
    this.courseDatabase.push(course);
    console.log(`Course "${title}" created by ${this.username}`);
    return course;
  }

  deleteCourse(course) {
    const index = this.courseDatabase.indexOf(course);
    if (index !== -1) {
      this.courseDatabase.splice(index, 1);
      console.log(`Course "${course.title}" deleted by ${this.username}`);
    } else {
      console.log(`Course not found: ${course.title}`);
    }
  }

  listCourses() {
    console.log("List of Courses:");
    this.courseDatabase.forEach((course) => console.log(`- ${course.title}`));
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.content = [];
    this.enrolledStudents = [];
    this.studentProgress = new Map(); // Map to track student progress
  }

  addContent(content) {
    this.content.push(content);
  }

  enrollStudent(student) {
    this.enrolledStudents.push(student);
    this.studentProgress.set(student, 0); // Initialize progress to 0 for the enrolled student
  }

  getStudentProgress(student) {
    return this.studentProgress.get(student) || 0;
  }

  markLessonAsCompleted(student, lesson) {
    const progress = this.getStudentProgress(student);
    this.studentProgress.set(student, progress + 1);
    console.log(
      `Marking lesson "${lesson.title}" as completed for ${student.username} in course "${this.title}"`
    );
  }
}
//some few examples

// Create instances
const student1 = new Student(1, "Student1");
const tutor1 = new Tutor(2, "Tutor1");
const admin = new Administrator(3, "Admin1");

const course1 = tutor1.createCourse("Mathematics 101");
