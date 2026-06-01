// let headings = document.getElementById('input1');
// console.log(headings);

// let text = document.getElementsByClassName('btn');
// text.style.color = "red";
// text.style.background = "yellow";
// text.style.fontSize = "30px";

// console.log(text);

// let para = document.querySelectorAll('p');
// console.log(para.innerHTML);


// let btn = document.querySelector('.btn');
// btn.addEventListener("mouseover",function(){
//     alert("single click hoa");
// })

// let btn1 = document.querySelector('#btn1');
// btn1.addEventListener("mouseout",function(){
//     alert('double click hoa');
// })


// let para = document.querySelector("button");
// para.addEventListener("dblclick",function(){
// para.style.background = "red";
// })

// let para = document.getElementsByTagName("button");
// para.addEventListener("mouseout",function(){
// para.style.background = "blue";
// })

let input = document.getElementById('input');
let result = document.getElementsByClassName('result');

input.addEventListener("input",function(){
    result.innerText = input.value;
    console.log(result.innerText);
})