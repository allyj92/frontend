// 3항 연산자

const num = 10;
if(num > 10){
    console.log(true)
}else{
    console.log(false)
}

// 조건? 성립할때 : 성립안할때;

num > 10? console.log(true) : console.log(false); 

// forEach, map, filter, reduce

const coronaCases = [
    {city : 'Seoul', case:1000},
    {city : 'Daejeon', case:500},
    {city : 'Daegu', case:300},
    {city : 'Busan', case:100},
    {city : 'Gwangju', case:50}
]


//forEach : 간결한 반복문

/* 
coronaCases.forEach(function(corona,index){ //매게변수는 임의로 지정 가능
    console.log(corona.case);
    console.log(corona.city);  
    console.log(index)
})
*/

// map : 새로운 배열을 만들 때 

const coronaCities = coronaCases.map((corona)=>{
    return `${corona.city}의 확진자 발생 수는 ${corona.case}`
})

console.log(coronaCities)

// filter

const dangerouseCity = coronaCases.filter(function(corona,index){
    // return corona.case > 300;
       return index < 3;  
})

console.log(dangerouseCity)

// reduce : 합치거나 계산을 할 때 사용

const numbers = [10,123,22,33,44,55];
const totalNumber = numbers.reduce((acc,cur)=>{ 
    console.log(acc,cur); //반복문을 돌며 합침
    return acc+cur;
})
console.log(totalNumber)

const totalCases = coronaCases.reduce((acc,cur)=>{
    console.log(acc,cur);
    return acc+cur.case;

},0) // 배열은 초기값을 지정 해 주어야 함
console.log(totalCases)