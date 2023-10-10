let firstDicee = Math.floor(Math.random()*6+1);
let secondDicee = Math.floor(Math.random()*6+1);


let firstDiceeImg = "/images/dice"+firstDicee+".png";
let secondDiceeImg = "/images/dice"+secondDicee+".png";

// console.log(firstDicee);
// console.log(secondDicee);

console.log(firstDiceeImg);
console.log(secondDiceeImg);


if(firstDicee == secondDicee){
    document.querySelector("h1").textContent = "Match Tied"
}
else if( firstDicee < secondDicee){
    document.querySelector("h1").textContent = "Player 2 Won"
}
else if( firstDicee > secondDicee){
    document.querySelector("h1").textContent = "Player 1 Won"
}

document.querySelector(".img1").setAttribute("src", firstDiceeImg);
document.querySelector(".img2").setAttribute("src", secondDiceeImg);



