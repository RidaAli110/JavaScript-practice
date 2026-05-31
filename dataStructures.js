// destructuring arrays practice
const books = ['history book', 'math book', 'science book', 'english book'];
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const[, , thirdbook] = books;
console.log(thirdbook);

// destructuring objects
const codingSession = {
     topic: 'functions',
     duration: 2,
     difficulty: 'easy'
};
const {topic, duration, difficulty} = codingSession;
console.log(topic, duration, difficulty);
const student = {
     name: 'alex',
     score: 95
};
const {name: studentName, score: marks} = student;
console.log(studentName);
console.log(marks);

// the spread operator
const skills = ['HTML', 'CSS'];
const updatedSkills = [...skills, 'JavaScript'];
const students = {
     name: 'rida',
     course: 'JavaScript'
}
const updatedStudent = {
     ...students,
     course: 'React'
};
console.log(updatedSkills);
console.log(updatedStudent);