//console.dir(document)


//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.forms);
//console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
 //var headerTitle = document.getElementById('header-title');
 //var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innertext);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
// headerTitle.style.backgroundColor= 'green';
//headerTitle.style.color='White';
//headerTitle.style.fontSize='25px';
 //headerTitle.style.height='80px';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //

//var items = document.getElementsByClassName('list-group-item')
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor='yellow';


//for(var i = 0; i < items.length;i++){
//   items[i].style.backgroundColor='#f4f4f4';
//}

// GETELEMENTBYTAGNAME // 
//var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
//for(var i=0;i<li.length;i++){
//li[i].style.listStyle ='none';}
 

// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit  = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem .style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//  QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
let itemList = document.querySelector('#items');
// ParentNode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parenttElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";
// console.log(itemList.firstElementChild[1]);
// itemList.firstElementChild.textContent ='Hello 1';

// lastChild
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";
// console.log(itemList.lastElementChild[1]);
// itemList.lastElementChild.textContent ='Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// prviousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//  CreateElement
//  Create a div
// var newDiv = document.createElement('div');

//  Add class
// newDiv.className = 'hello';

//  Add Id
// newDiv.id ="hello1";

// console.log(newDiv);

// // Add attr
// newDiv.setAttribute('title','Hello Div');

//  Create text node
// let newDivText = document.createTextNode('Hello World');

//  Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv,h1);

// let button = document.getElementById('button').addEventListener('click',buttonClicked)


// function buttonClicked(e){
    // document.getElementById('header-title').innerText="Changed";
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    //console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // let output = document.getElementById('output');
    // output.innerHTML='<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }

let form = document.getElementById('addForm');
let ItemList = document.getElementById('items');
let filter = document.getElementById('filter');

// 제출 이벤트
form.addEventListener('submit',addItem);
// 삭제 이벤트
ItemList.addEventListener('click',removeItem);
// 필터링
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    ItemList.appendChild(li);

    // create del button element
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
        console.log(itemName);

    });
}
