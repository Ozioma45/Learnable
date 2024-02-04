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
