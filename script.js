const inputBox = document.querySelector('#input-box');
const container = document.querySelector('#list-container');

function addtast(){
    if(inputBox.value === ''){
        alert("You Must Write Something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

container.addEventListener("click",function(e) {
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } 
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data", container.innerHTML);
}
function showTast() {
    container.innerHTML = localStorage.getItem("data");
}
showTast();