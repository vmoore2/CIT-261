document.getElementById("exTwo").innerHTML = "My full name is:" + localStorage.user.fullName();

function showArray(){
    document.getElementById("length").innerHTML = localStorage.favorites.length; 
    document.getElementById("firstelement").innerHTML = localStorage.favorites[0];
    document.getElementById("secondelement").innerHTML = localStorage.favorites[1];
    document.getElementById("fourthelement").innerHTML = localStorage.favorites[3];
}

document.getElementById("exOnea").innerHTML = localStorage.counter["one"];

document.getElementById("exOneb").innerHTML = localStorage.counter["two"];

document.getElementById("exOnec").innerHTML = localStorage.counter["three"]; 