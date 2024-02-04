## Abstractions in the Solution

In our project, we use a concept called **abstraction** to make our code easier to understand and work with. Abstraction is like providing a simplified view of something complex, allowing us to use it without worrying about the nitty-gritty details.

### 1. **Abstract Class: `CourseContent`**

Imagine we have different types of content in our courses, like text, videos, or quizzes. To keep things neat, we created a blueprint called `CourseContent` that helps us work with any type of content. This blueprint has a rule: every type of content must know how to display itself. We call this the `displayContent` rule, and it keeps things consistent.

```javascript
class CourseContent {
  constructor(title) {
    this.title = title;
  }

  displayContent() {
    // Every content type must know how to display itself
    throw new Error(
      "Abstract method 'displayContent' must be implemented in subclasses."
    );
  }
}
```

### 2. **Abstraction in `Student` Class: Viewing Course Content**

Now, for students who want to view their course content, we keep it simple. We don't want them to worry about how each type of content works. So, we created a method called `viewCourseContent(course)` that uses the `displayContent` rule from our `CourseContent` blueprint. Students just need to say "show me the content," and our code takes care of the rest!

```javascript
class Student extends User {
  // ... (other methods)

  viewCourseContent(course) {
    // Just show the content, no need to know the details
    course.displayCourseContent();
  }

  // ... (other methods)
}
```

### 3. **Easy-to-Use Methods**

Each part of our code (like students, tutors, and administrators) has its own set of tasks. We make sure they only see what they need to see. For example, tutors can upload content and check how students are doing, but they don't need to worry about the inner workings. This way, everyone can focus on their job without getting overwhelmed.

By using these abstractions, we make our code friendlier for beginners. It's like using a TV remote – you don't need to know how the buttons work inside; you just press what you need!

---
