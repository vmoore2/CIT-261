function changeCss(x) {
    var a = document.getElementsByClassName("arrow"); 
    for (var i= 0; i<a.length; i++){
        if(i==x)
        continue; 
        a[i].className = "arrow";
    }
    if(a[x].className=="arrow arrowdown"){
      a[x].className="arrow"; 
    }else {
     a[x].className="arrow arrowdown"; 
    }
    var y = document.getElementsByTagName("ul");
    for (var i=0; i<y.length; i++ ) {
        if(i==x)
        continue; 

        y[i].className="noshow";
    }

    if(y[x].className=="yesshow"){
        y[x].className= "noshow"; 
    }else {
        y[x].className = "yesshow"; 
    }
   
}
function changebackgroundcolor() {
    var z= document.getElementsByClassName("background-style")
    for (var i=0; i<z.length; i++){
        if (z[i].style.backgroundColor== "#4d79ff"){
            z[i].style.backgroundColor= "#00ffff";
        }
        else {
        z[i].style.backgroundColor = "#4d79ff"; 
        }
    }
}
function follow(x) {
    var ammon = {
        storyOne:"Sebus", storyTwo:"King Lamoni is converted", storyThree: "King Lamoni's Father"

    };
    var b = document.getElementsByTagName("h3");
    for(var i=0; i<b.length; i++){
        if(x==0){
            document.getElementById("itemOne").innerHTML = ammon.storyOne;
            document.getElementById("itemTwo").innerHTML = ammon.storyTwo;
            document.getElementById("itemThree").innerHTML = ammon.storyThree;
        }
    }
}
