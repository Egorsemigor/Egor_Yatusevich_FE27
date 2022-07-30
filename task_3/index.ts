// ============

// #### Задачи: 

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

interface User{
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}
const users: User[] = [
{
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true
    
},
{
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true
},
{
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false
}
]

//task1

const task1 = Object.values(users).map(item => item.name).join(', ');
console.log(task1);


//task2
const task2 = Object.values(users).filter(el => el.cars).map(item => item.cars).flat().length;
console.log(task2)


//task3
function usersEducation(users:User[]) {
    return users.filter(el => el.hasEducation);
}
console.log(usersEducation(users));


//task4
function usersAnimals(users:User[]) {
    return users.filter(el => el.animals);
}
console.log(usersAnimals(users))

//task5
function carsNames(users:User[]) {
return users.filter(el => el.cars).map(item => item.cars).flat().join(', ');
} 
console.log(carsNames(users));