
let c=1;
let l=0;

function commentHere(){

    let msg= document.querySelector("#inputId1").value;
    let a=document.createElement("div");

    //a.textContent=msg;
    a.style.background="black";
    a.style.color="white";
    a.style.margin="3px";
    a.style.padding="5px";
    a.style.display="flex";
    a.style.justifyContent="space-between";


    const c1=document.createElement("div");
    c1.textContent=msg;

    const c2=document.createElement("button");
    c2.textContent="DELETE";

    a.appendChild(c1);
    a.appendChild(c2);


    let b=document.querySelector('#box')
    b.insertBefore(a,b.firstChild);
   // c++;


   document.querySelector("#inputId1").value="";

}


function LikeHere(){
    l++;
    document.querySelector("#lid").innerHTML="Like" + l;

}