var cal=document.getElementById("festcontent");
let count=0;
let check=0;
function change(element,count){
    clearTimeout(time);
    if(count!=check){
        cal.style.animation="no";
        cal.style.cssText="background-image: url("+ element + "); animation: popup 1s;";
    var time=setTimeout(function(){cal.style.animation="no";},1200);
    }
    check=count;
}
function clickb2(){
    change("vasant.jpg",2);
}
function clickb3(){
    change("holifest.jpg",3);
}
function clickb4(){
    change("ramnavmi.jpg",4);
}
 function clickb5(){
  change("budthfestival.jpg",5);
}
function clickb6(){
    change("magofesteveal.jpg",6);
}