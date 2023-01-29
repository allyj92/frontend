const animals = [
    {name : 'lion', size : 'big'},
    {name:'monkey',size:'medium'},
    {name: 'dog', size : 'small'},
    {name : 'lion', size : 'big'},
    {name:'monkey',size:'medium'},
    {name: 'dog', size : 'small'},
    {name : 'lion', size : 'big'},
    {name:'monkey',size:'medium'},
    {name: 'dog', size : 'small'},
    {name : 'lion', size : 'big'},
    {name:'monkey',size:'medium'},
    {name: 'dog', size : 'small'},
    {name : 'lion', size : 'big'},
    {name:'monkey',size:'medium'},
    {name: 'dog', size : 'small'},
]
console.log(animals)

const num = 9;

// if ~ else if ~ else

if (num < 10){         // === : 문자형 타입 고려 / == : 문자형 고려 x
    console.log('10보다 작습니다.')}
else if (num === 10 ){
    console.log('10과 같습니다.')
}   
else{
    console.log('10보다 큽니다.')   
}    

const animal = animals[2].name; 

// switch

switch(animal){
    case 'lion' :
        console.log('사자입니다.');
        break;
    case 'monkey':
        console.log('원숭이입니다')    
        break;
    default:
        console.log('동물이 아닙니다.')    
}

// for문

for(let i = 0; i < animals.length; i++){
    console.log(animals[i])

}

for(let animal of animals){
    console.log(animal.name)
    console.log(animal.size)
}


let i =10;

// while문

while(i>0){
    console.log(i);
    i--
}