var row1 = document.getElementById('row1');
var height1 = row1.clientHeight;
console.log(height1) 
var element = document.getElementById("element");
    var height = element.clientHeight;
    var h = window.innerHeight;
    element.style.top = height+"px";
    console.log(height)
    var row3 = document.getElementById('row3');
    var height2 = row3.clientHeight;
    console.log(height2)
    row3.style.top = height1+height2+height+"px";
    var row4 = document.getElementById('row4');
    var height3 = row4.clientHeight;
    console.log(height3)
    row4.style.top = height1+height2+height+height3+"px";