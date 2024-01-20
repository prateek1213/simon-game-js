let on = false;
let strict = false;
let IntervalId;
let win=false;
let order=[];
let playerOrder=[];
let isSequenceShown=false;
const strictButtion = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const turnCounter = document.querySelector("#turn");
const startButton = document.querySelector("#start");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
let colors=['red','yellow','green','blue'];


strictButtion.addEventListener('click', (event) => {
    if (strictButtion.checked==true){
        strict=true;
    }
    else{
        strict=false;
    }
})

onButton.addEventListener('click',(event)=>{
    if(onButton.checked==true){
        on=true;
        turnCounter.innerHTML="-";
    }
    else{
        on=false;
        turnCounter.innerHTML="";
        clearInterval(IntervalId);
    }
})

startButton.addEventListener('click',(event)=>{
    if(on || win){
        play();
    }
})

function play(){
    win=false;
    order=[];
    playerOrder=[];
    turn=1;
    turnCounter.innerHTML=1;
    
    startGame();
}

function startGame(){
    addToSequence();
    showSequenceToUser();
    turnCounter.innerHTML=turn;
    setTimeout(() => {
        clearColor();
    }, 1000);

}

const check= ()=>{
     if(order.length!=playerOrder.length || order[order.length-1]!=playerOrder[playerOrder.length-1]/*order!=playerOrder*/){
        turnCounter.innerHTML="NO";
        setTimeout(() => {
            reset();
        }, 500);
        return;
     }
     playerOrder=[];
     turn++;
     setTimeout(()=>{
        startGame();
     },300);
}
function reset(){
    win=false;
    order=[];
    playerOrder=[];
    turn=0;
    turnCounter.innerHTML="-";
}

function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
  }

function showSequenceToUser(){
    switch(order[order.length-1]){
        
        case "green":{
           topLeft.style.backgroundColor="lightgreen"
           let audio=document.getElementById("clip1");
           audio.play();
        }break;
        case "red":{
            topRight.style.backgroundColor = "lightpink";
            let audio=document.getElementById("clip2");
            audio.play();
        }break;
        case "yellow":{
            bottomLeft.style.backgroundColor = "lightyellow";
            let audio=document.getElementById("clip3");
            audio.play();
        }break;
        case "blue":{
            bottomRight.style.backgroundColor = "lightblue";
            let audio=document.getElementById("clip4");
            audio.play();
        }break;
    }
}
function addToSequence(){
    let selectedItemFromColors=Math.floor(Math.random()*4);
    order.push(colors[selectedItemFromColors]);
    
}

topLeft.addEventListener('click',(event)=>{
    if(on && !win){
        playerOrder.push("green");
        checkUserInput();
    }
    
})

topRight.addEventListener('click',(event)=>{
    
    if(on && !win){
        playerOrder.push("red");
        checkUserInput();
    }
    
})

bottomLeft.addEventListener('click',(event)=>{
    if(on && !win){
        playerOrder.push("yellow");
        checkUserInput();
    }
    
})

bottomRight.addEventListener('click',(event)=>{
    if(on && !win){
        playerOrder.push("blue");
        checkUserInput();
    }
    
})

function checkUserInput(){
    
    if(order.length>playerOrder.length){
        return;
    }
    else{
        check();
    }
    
    
}