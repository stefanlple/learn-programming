let isAlive=false;
let sum=0;
let hasBlackjack=false;
let message="";
let cards=[];

let player = {
    name:"Marcus",
    chips:123
}

let messageEl =document.querySelector(".messageEl");
let sumEl=document.querySelector(".sumEl")
let cardsEl=document.querySelector(".cardsEl")
let playerEl=document.querySelector(".playerEl");

playerEl.textContent= player.name + ": €" + player.chips

function startGame(){
    isAlive=true;
    let fCard=getRandomInt();
    let sCard=getRandomInt();
    sum=fCard+sCard;
    cards=[fCard,sCard]
    renderGame();
}
function renderGame(){
    sumEl.textContent="Sum: "+sum;
    cardsEl.textContent="Cards: " 
    cards.forEach(element => cardsEl.textContent+= element +" ")

    
    if(sum<=20){
        message="Do you want a new Card?";
    } else if(sum === 21){
        message="Blackjack!";
        hasBlackjack=true;
    } else{
        message="You lost!"
        isAlive=false;
    }  
    messageEl.textContent=message;
}

function getRandomInt() {
    number=Math.floor(Math.random() * 13)+1;
    if(number==1){
        return 11;
    }else if (number>10){
        return 10;
    }else{
        return number;
    }
  }

function newCard(){
    if(isAlive===true && hasBlackjack===false){
    tCard=getRandomInt();
    sum+=tCard;
    cards.push(tCard);
    renderGame();
}
    
} 

