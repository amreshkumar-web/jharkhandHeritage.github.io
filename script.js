var txt=document.getElementById("jtext");
var txt2=document.getElementById("ph2");
var mleaf=document.getElementById("mleaf");
var tree=document.getElementById("btree3");
var tree2=document.getElementById("btree4");
var leaf1=document.getElementById("leaf6");
var leaf2=document.getElementById("leaf2");
var leaf3=document.getElementById("leaf3");
var leaf4=document.getElementById("leaf4");
var leaf5=document.getElementById("leaf5");
var side=document.getElementById("side");



window.addEventListener('scroll',() => {
    let value=window.scrollY;
    console.log(value);
    if(value>=500){
        document.getElementById("nav").style.transition="background-color 2s ease";
        document.getElementById("nav").style.backgroundColor="rgb(255,255,255,0.4)";
        document.getElementById("logo").style.transition="color 2s ease";
        document.getElementById("logo").style.color="white";

    }
    else{
        document.getElementById("nav").style.backgroundColor="rgb(0,0,0,0.4)";
        document.getElementById("logo").style.color="black";
    }
    if(value>=81.9){
        txt.style.transition="color 1s ease";
        txt.style.color="white";
    }
    else{
        txt.style.color="black";
    }
    
    txt.style.marginTop=value * 2.5 + 'px';
    mleaf.style.marginRight=-value * 1.5 + 'px';
    mleaf.style.marginTop=-value * 1.3 + 'px';
    tree.style.marginLeft=-value * 1 + 'px';
    tree2.style.marginLeft=value * 1 + 'px';
    leaf1.style.marginTop=-value * 1.7 +'px';
    leaf2.style.marginLeft=value * 1.7 +'px';
    leaf3.style.marginLeft=-value * 1.7 +'px';
    leaf4.style.marginLeft=value * 1.7 +'px';
    leaf4.style.marginTop=value * 1.7 +'px';
    side.style.marginLeft=-value*1.1 + 'px';
})