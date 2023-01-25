<<<<<<< HEAD
const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;

// console.log(item1 + loyalty)
// console.log(item2 + loyalty)
// console.log(item3 + loyalty)
=======
// array
const animals = ["lion","rabbit","monkey","dog","cat"];
//const fruits = "apple, banana, strawberry"
//animals[3]='tigar'
//animals.push("tigar")
//animals.unshift("dog") // 맨 앞에 위치
//animals.pop();
//console.log(Array.isArray(fruits));
>>>>>>> 3d1176e907e70d1fb04c7ab5e0a497c62e870821

//console.log(animals.indexOf("monkey"))

<<<<<<< HEAD
// function
// function showPrice(aaa){
    // console.log(aaa+ loyalty);
   // return aaa + loyalty;
// }
// const price1 = showPrice(item1);
// const price2 = showPrice(item2);
// const price3 = showPrice(item3);

// console.log(price1)
// console.log(price2)
// console.log(price3)

// console.log(showPrice(item1))
// console.log(showPrice(item2))
// console.log(showPrice(item3))

// 화살표 함수
const showPrice = (price) => {
    console.log(price + loyalty)
}

showPrice(item1)
showPrice(item2)
showPrice(item3)
=======
//splice, slice
console.log(animals.splice(1,3));  // 1번째 인덱스 부터 3개
//animals.splice(animals.indexOf("monkey"),3)
//const sliceAnimals = animals.slice(0,2)

//object
const monkey = {
    name:'kiki',
    age:8,
    weight : 40,
    gender : 'male',
    isCute : true,
    food:["banana","carrot","potato"],
    home : {
        location : "zoo",
        size : "big",
        price: 3000
    }
}

monkey.gender = "female"

console.log(monkey['name'])
console.log(monkey)

//json
console.log(monkey)
const monkeyJSON = JSON.stringify(monkey);
const parseJASON = JSON.parse(monkeyJSON)
console.log(parseJASON.name)

//미니 프로젝트
//1. 과일 종류 배열
const friuts = ["apple","banana","strawberry","graph"]
//console.log(friuts)
//console.log(Array.isArray(friuts))
//console.log(friuts.splice(0,2))
fruits1=friuts.slice(0,2)
console.log(fruits1)

//2. 직원 인적사항
const person = {
    age:29,
    name:"paul",
    number:"010-4555-1111",
    hobby:["book","shopping","movie"],
    family:{
        father:"kim",
        mother:"lian",
        brother:"tom"
    }
} 

console.log(person.age)

//json

const personJSON = JSON.stringify(person);
const parseJASON1 = JSON.parse(personJSON);
console.log(parseJASON1.name)
>>>>>>> 3d1176e907e70d1fb04c7ab5e0a497c62e870821
