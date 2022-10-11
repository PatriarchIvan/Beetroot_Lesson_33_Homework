// const arr = [];
// arr.push(0, 1, 2, 3, 4);
// console.log(`Array: ${arr}. Array's length: ${arr.length} elements`);
// arr.push(5,6);
// arr.shift();
// console.log(`New Array: ${arr}`);

const students = [
    {name: 'Hulio', surname: 'Avares', age: 22},
    {name: 'Pedro', surname: 'Ronaldo', age: 44},
    {name: 'Lolita', surname: 'Famira', age: 25},
    {name: 'Margo', surname: 'Rapira', age: 33},
    {name: 'Huan', surname: 'Carleone', age: 19},
];

// students.forEach(elem => {
//     if (elem.age < 30) {
//         console.log(`${elem.name} : ${elem.age}`);
//     }
// });


let newStudents = [];

for (let i = 0; i < students.length; i++) {
    newStudents[i] = students[i];
}
console.log(newStudents);
newStudents.forEach(elem => {
    elem.fullName =  elem.name + ' ' + elem.surname;
    delete(elem.name);
    delete(elem.surname);
});

console.log(newStudents);
