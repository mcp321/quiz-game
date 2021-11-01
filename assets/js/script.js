

let username = document.getElementById("typeName");
let headerName = document.getElementById("headerName");
let enterBtn = document.getElementById("enterBtn")


function greeting () {
    headerName.innerHTML= ""  
    headerName.innerHTML = "Hello! " + typeName.value + " You can now answer the quiz";
    typeInput.style.display = "none";
}

