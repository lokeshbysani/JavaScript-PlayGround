const scoreDolphins = (97+112+101)/3;   //(96+108+89)/3  (97+112+101)/3
const scoreKoalas = (109+95+106)/3; //(88+91+110)/3  (109+95+123)/3

const isDolphinsWins = scoreDolphins>scoreKoalas
const isDraw = scoreDolphins === scoreKoalas
const isKoalasWins = scoreDolphins<scoreKoalas
console.log(scoreDolphins)
console.log(scoreKoalas)

if(isDolphinsWins && scoreDolphins>=100){
    console.log("Team Dolphins wins.");
}else if (isDraw && scoreDolphins >=100){
    console.log("Match is Draw");
}else if(isKoalasWins && scoreKoalas>=100){
    console.log("Team Koalas Wins")
}else{
    console.log("No one wins. Suckers");
}