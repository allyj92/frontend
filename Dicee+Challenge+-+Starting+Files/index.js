let randomNumber1 = Math.floor(Math.random()*6 + 1);
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random()*6 + 1);


let img1 = document.getElementsByClassName("img1")[0];
let img1Src = img1.src;
console.log(img1Src);
// 잘못된 코드 예시 (문자열에는 innerText 사용 불가)
// img1Src.innerText = "http://127.0.0.1:5500/images/dice" + randomNumber1 + ".png";
img1.src= "http://127.0.0.1:5500/images/dice"+randomNumber1+".png";


let img2 = document.getElementsByClassName("img2")[0];

img2.src= "http://127.0.0.1:5500/images/dice"+randomNumber2+".png";


// ⚠️ 주의:
// img1Src는 단순히 문자열로 현재 src 경로를 저장한 것이므로, 
// 이 변수에 아무리 무언가를 바꿔도 실제 이미지에는 반영되지 않음!
// 이미지를 바꾸려면 img1.src를 직접 바꿔야 함!