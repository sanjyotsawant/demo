
function send(){
    let msg=document.querySelector("#ip").value;
    let box1=document.querySelector("#box1").cloneNode(true);
    box1.innerHTML=msg;

    let box=document.querySelector("#box");
    box.appendChild(box1);
   // box1.style.background="white";
    //box1.style.margin="5px";
    document.querySelector("#ip").value="";

}


function handleMouseOver(){
    let t1=document.querySelector("#t1");
    t1.innerHTML="Typing...";
}

function handleMouseOut(){
    let t1=document.querySelector("#t1");
    t1.innerHTML="";
}