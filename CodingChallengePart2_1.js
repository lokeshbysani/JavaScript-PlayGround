const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

function checkWinner(averageDolphins,averageKoalas){
    if(averageDolphins>=2*averageKoalas){
        console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
    }else if(averageDolphins<=2*averageKoalas){
        console.log(`Koalas win (${averageDolphins} vs. ${averageKoalas})`);
    }else{
        console.log("No one Wins")
    }
}

let averageDolphins = calcAverage(44,23,71);
let averageKoalas = calcAverage(65,54,49) 

checkWinner(averageDolphins,averageKoalas)



averageDolphins = calcAverage(85,54,41);
averageKoalas = calcAverage(23,34,27) 

checkWinner(averageDolphins,averageKoalas)
