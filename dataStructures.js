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

// Rest parameter
const studentProfile = function(name, course, ...skills){
     console.log(name);
     console.log(course);
     console.log(skills);
     console.log(`First skill: ${skills[0]}`);
     console.log(skills.length);
}
studentProfile('alex', 'javascript', 'HTML', 'CSS', 'react', 'tailwind')
const sumNumbers = function(...numbers){
     console.log(numbers);
     console.log(numbers[0]);
     console.log(numbers.length);
};
sumNumbers(10, 20, 30, 40, 50);
const shoppingList = function(owner, ...items) {
     console.log(`owner: ${owner}`);
     console.log(`items:`, items);
     console.log(`Total items: ${items.length}`);
}
shoppingList('Alex', 'Milk', 'Bread', 'Eggs');