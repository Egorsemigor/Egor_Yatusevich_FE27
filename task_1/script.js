//map
function customMap(cb){

let result = [];

for(let i = 0; i < this.length; i++){
    result.push(cb(this[i], i, this))
}
 return result;

}


Array.prototype.customMap = customMap;

// // let arr = [1,2,3,4];

// const arrMap = arr.customMap((el, index) =>{
// return el += el;
// })
// console.log(arrMap)

//filter
function customFilter(arr){
    let filtered = [];
    for (let i = 0; i < this.length; i++){
        const filteredArr = arr(this[i], i, this)
        if(filteredArr) {
            filtered.push(this[i]);
        }
    }
return filtered;
}

Array.prototype.customFilter = customFilter;

// const letters = ['a','a', 'a', 's','f','g','h'];

// const filteredResult = letters.customFilter((el, index, array) => {
//     return el === 'a'
// })

// console.log(filteredResult);

//reduce

function customReduce (cb, initialValue){
    let acc;
    let curr;

    if(!this.length && !initialValue){
        throw new Error ('sdfghjm')
    } else {
        acc = initialValue ? initialValue : 0;
        for(let i = 0; i < this.length; i++){
            curr = this[i];
            acc = cb(acc,curr,i,this);
        }
    }
    return acc;
}

Array.prototype.customReduce = customReduce;
// let reduceArr = [1,2,3,4,5];
// let reduceRes = reduceArr.customReduce((acc,curr) => {
//     // console.log(acc);
//     // console.log(curr);
    
//     acc+=curr;
//     return acc;
    
// });
// console.log(reduceRes);


//forEach

function customForEach(callback){

for(let i = 0; i < this.length; i++){
    callback(this[i], i, this)
}

}


Array.prototype.customForEach = customForEach;

// let arr = [1,2,3,4];

// const arrForEach = arr.customForEach((el, index) =>{
// console.log(el += el);
// })


// Создать строку из названий предметов написаных через запятую
// Посчитать общее количнство студентов и учителей на всех предметах
// Получить среднее количество студентов на всех пердметах
// Создать массив из объектов предметов
// Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
    const subjects = {
        mathematics: {
            students: 200,
            teachers: 6
        },
        biology: {
            students: 120,
            teachers: 6
        },
        geography: {
            students: 60,
            teachers: 2
        },
        chemistry: {
            students: 100,
            teachers: 3
        }
    }

    //task_1

    let task_1 = Object.keys(subjects).join(', ');
    console.log(`1) ${task_1}`);

     //task_2

     let task_2 = Object.values(subjects);
     let studentsSum = 0;
     let teachersSum = 0;
     for(let value of task_2){
        studentsSum += value.students;
        teachersSum += value.teachers;
    }
    console.log(`2) Студентов: ${studentsSum};   Ученико: ${teachersSum};`);

    //task_3
    let avarage = studentsSum / task_2.length;
    console.log(`3) Среднее колличество студентов: ${avarage}`);

    //task_4 не совсем понял это задание и не уверен, что правильно сделал
    let array = [];
    array = Object.entries(subjects);
    console.log(array);

    //task_5
    console.log(array[0][1].teachers)
    array.sort(function(a,b){
        return a[1].teachers - b[1].teachers;
    })
    console.log(array.reverse());




    
    




    



    