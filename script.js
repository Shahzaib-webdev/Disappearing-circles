let firstCircle = document.getElementById("first-circle");
let secondCircle = document.getElementById("second-circle");
let thirdCircle = document.getElementById("third-circle");

firstCircle.onclick = function(){
    firstCircle.style.visibility = "hidden";
}


secondCircle.onclick = function(){
    secondCircle.style.visibility = "hidden";
}


thirdCircle.onclick = function(){
    if(thirdCircle.style.visibility === "hidden"){
        thirdCircle.style.visibility = "visible";
    }
    else{
        thirdCircle.style.visibility = "hidden";
    }
}