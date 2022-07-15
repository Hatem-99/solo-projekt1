let x = "john"
let y = "mark"

console.log(x + "<>"+ y)

let object = {
    name: "Hatem",
    surname: "Mahmoud",
    email: "asdhbajdbw@gmail.com"
}


delete object.email

let array = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < array.length; i++) {
console.log(array[i])    
}

let randomArray = [];
for (let i=0, t=101; i<t; i++) {
    randomArray.push(Math.round(Math.random() * t))
}




const whichIsLonger = function(firstArray,seconedArray){
     firstArray = []
     seconedArray = []
    if(firstArray.length > seconedArray.length){
        console.log(firstArray)
    }else{
        console.log(seconedArray)
    }
}

const whichSumBigger = function(one, tow){
     one = []
     tow = []
    for (let i = 0; i < one.length; i++) {
        let sum1 = sum1 +=i
    }
    for (let i = 0; i < tow.length; i++) {
        let sum2 = sum2 +=i
    }
    if (sum1 > sum2){
        console.log(sum1)

    }else {
        console.log(sum2)
    }
}


const tdsLog = function(){
let table = document.getElementById("table")
let tds = table.querySelectorAll("td")

for (let i = 0; i < tds.length; i++) {
   if(i.innerHTML === String){
    console.log(i.innerText)
   } 
}}

const changeHeading = function(str){
 let heading  = document.getElementsByTagName("h1")
heading.innerText = str


}
const newRow = function(num){
    let table = document.getElementById("table")
    let row = document.createElement("tr")
    table.appendChild(row)
} 


const addTestClass = function(){
    let rows = document.getElementsByTagName("tr")
    for (let row of rows ){
        row.classList.add("test")
    }
}
const redBackground = function(){
   let links = document.getElementsByTagName("a");
   for(let link of links){
    link.classList.add("redBackground")
   } 
}

const addLi = function () {
    let unorderedList =document.getElementById("unorderdList"); 
    let createNewLi = document.createElement("li");
    createNewLi.innerText = "added li"
    unorderedList.appendChild(createNewLi)
    
  }

const removeLi = function(){
    let unorderdList = document.getElementById("unorderdList");
    unorderdList.classList.add("hide")
}

const hideImges = function(){
    let imges = document.getElementsByTagName("img")
    for(let imge of imges ){
        imge.classList.add("hide")
    }
}

const hideShowTable = function(){
    let table = document.getElementById("table")
    table.classList.toggle("hide")
}

const deleteTd = function(){
    let tds =document.getElementsByTagName("td")
    
    
   
    
}











window.onload = function(){
    console.log("page laoded")
}