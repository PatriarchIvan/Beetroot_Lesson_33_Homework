const arr = [];
const students = [
    {name: 'Hulio', surname: 'Avares', age: 22},
    {name: 'Pedro', surname: 'Ronaldo', age: 44},
    {name: 'Lolita', surname: 'Famira', age: 25},
    {name: 'Margo', surname: 'Rapira', age: 33},
    {name: 'Huan', surname: 'Carleone', age: 19},
];
const newStudents = [];
// 1)
arr.push(0, 1, 2, 3, 4);
console.log(`Array: ${arr}. Array's length: ${arr.length} elements`);
arr.push(5,6);
arr.shift();
console.log(`New Array: ${arr}. Array's length: ${arr.length} elements`);
// 2)
students.forEach(elem => {
    if (elem.age < 30) {
        console.log(`Yonger than 30: ${elem.name}, ${elem.age} years`);
    }
});
// 3)
for (let i = 0; i < students.length; i++) {
    newStudents[i] = students[i];
}

for (let student of newStudents) {
    student.fullName = student.name + ' ' + student.surname;
    delete(student.name);
    delete(student.surname);
}

console.log(newStudents);
