/*
function Song(singer,title,release){
    
    this.singer = singer; // this 는 윈도우를 가리키고  윈도우에 singer가 저장된 것
    this.title = title;
    this.release = new Date(release);
    this.getReleaseDay = function(){
        return this.release.getDay();
    }
    this.getinfo = function(){
        return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`
    }

    
}
*/

class Song{
    constructor(singer, title, release){
        this.singer = singer;
        this.title = title;
        this.release = new Date(release);
    }
    getReleaseDay(){
        return this.release.getDay();
    }
    getinfo(){
        return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`
    }
}

//인스턴스화
const song1 = new Song("bts","DNA","2017-09-18"); // 단독적인 객체를 만들고 싶음
const song2 = new Song("EMINEM","Love Yourself","2001-05-11")

console.log(song1, song2);
console.log(song1.getinfo(),song2.getinfo())

