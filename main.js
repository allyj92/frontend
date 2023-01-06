console.log("hello javascript!!")
console.log(console)


// var,let,const

// var는 글로벌한 이유로 사용을 지양할 것
var name = "scalper"

//let
// 변수의 값을 재정의 할 필요가 있을 때
let score = 0;
score =2;

// const
// 변하지 않은 값을 지정할 때, 블록 밖에서 사용x
const name = "scalper"
name = "codeScalper";
console.log(name)  // 에러발생

// 블록 안에서 선언 된 것은 블록 안에서만 
//사용 가능 