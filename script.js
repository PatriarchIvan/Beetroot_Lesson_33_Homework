const arr = [];
const students = [{
        name: 'Hulio',
        surname: 'Avares',
        age: 22
    },
    {
        name: 'Pedro',
        surname: 'Ronaldo',
        age: 44
    },
    {
        name: 'Lolita',
        surname: 'Famira',
        age: 25
    },
    {
        name: 'Margo',
        surname: 'Rapira',
        age: 33
    },
    {
        name: 'Huan',
        surname: 'Carleone',
        age: 19
    },
];
const newStudents = [];
// 1)
arr.push(0, 1, 2, 3, 4);
console.log(`Array: ${arr}. Array's length: ${arr.length} elements`);
arr.push(5, 6);
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

// LMS 1)
const shopList = [{ name: 'Bread', value: 0, price: 3.15, isBought: false,},
    {name: 'Butter',value: 0, price: 6.12, isBought: false,},
    {name: 'Juice',value: 0, price: 4.99, isBought: false,},
    {name: 'Milk',value: 0, price: 6.11, isBought: false,},
    {name: 'Orange',  value: 0,  price: 8.25,  isBought: false,},
    {name: 'Wine',  value: 0,  price: 15.30,  isBought: false,},
];

const buyProduct = (name) => {
    if (typeof name !== 'string') {
        console.log('Enter correct value');
    }

    for (let product of shopList) {
        if (product.name === name) {
            product.value ++;
            product.isBought = true;
            console.log(`You\'ve sucessfully added ${name} to your shoplist! There're ${product.value} ${name} in your shoplist.You will pay: ${product.overallValue = product.value * product.price}$`);
        }
    }
};

const showList = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].isBought === true) {
            console.log(arr[i].name);
        }
    }
    console.log('*****NOT BOUGHT YET*****');
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].isBought !== true) {
            console.log(arr[i].name);
        }
    }
};

const deleteFromList = (name) => {
    for (let i = 0; i < shopList.length; i++) {
        if (shopList.name === name) {
            shopList.pop(shopList[i]);
        }
    }
    return shopList;
};

buyProduct('Orange');
// buyProduct('Bread');
// showList(shopList);
deleteFromList('Orange');
showList(shopList);