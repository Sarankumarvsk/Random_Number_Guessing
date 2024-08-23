let d=Math.floor(Math.random()*100);
let g=1;
function fun1(){
   let a=document.getElementById("num"); 
if(a.value==d&&g<=10){
   g++;
   window.location.href="./won.html";  
}
else  if(a.value>d && g<=10){
   document.getElementById("count").innerHTML=g;
  

       document.getElementById("hint").innerHTML="Try with lower value";
       g++;
    }
else  if(a.value<d && g<=10){
        document.getElementById("hint").innerHTML="Try with greater value";
        document.getElementById("count").innerHTML=g;
        g++;
     }
else if(g>10){
   window.location.href="./loss.html";
}
   }
function fun2(){
   location.reload();
}
