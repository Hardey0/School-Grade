if// You are developing a school management system. The system needs to determine a student's eligibility for various extracurricular activities based on their academic performance, behavior, and attendance. The school has specific criteria for each activity. Your task is to write a function that determines which activities a student can participate in.

// Criteria:
// Academic Performance:
// If the student's GPA is 3.5 or above, they are eligible for all academic clubs.
// If the GPA is between 3.0 and 3.49, they are eligible for only certain academic clubs.
// If the GPA is below 3.0, they are not eligible for any academic clubs.

// Behavior:
// If the student has 1-2 minor infractions, they are eligible for membership but not leadership roles.
// If the student has 3 or more infractions, they are not eligible for any clubs.
// Attendance:

// If the student has attended 95% or more of their classes, they are eligible for sports teams.
// If attendance is between 85% and 94%, they are eligible for practice but not official matches.
// If attendance is below 85%, they are not eligible for any sports teams.
// Grade Level:

let gpa = 3.5;
let behaviorInfractions = 0;
let attendance = 80;
let gradeLevel = "Junior";

if (gpa >= 3.5) {
  console.log("You are eligible for all academic clubs");
  if (behaviorInfractions === 0) {
    console.log("You are eligible for leadership positions");
    if (attendance >= 95) {
      console.log("You are eligible for the sport team");
    } else if (attendance >= 85 && attendance <= 94) {
      console.log("You are eligible for practice but not official match");
    } else {
      console.log("You are not eligible for any sports teams");
    }
  } else if (behaviorInfractions > 0 && behaviorInfractions <= 2) {
    console.log("You are eligible for membership but not leadership roles");
  } else {
    console.log("You are not eligible for any behavioural clubs");
  }
} else if (gpa >= 3.0 && gpa <= 3.49) {
  console.log("You are eligible for certain academic clubs");
} else {
  console.log("You are not eligible for any academic clubs");
}