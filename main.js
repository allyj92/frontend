const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;

// console.log(item1 + loyalty)
// console.log(item2 + loyalty)
// console.log(item3 + loyalty)


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