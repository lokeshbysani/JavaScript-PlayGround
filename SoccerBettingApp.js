//Data Received from an API
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };


const [players1,players2]=game.players; // destructuring
const [gk,...fieldPlayers] = players1; 
const allPlayers = [...players1,...players2]
const players1Final = [...players1,'Thiago', 'Coutinho','Perisic']
console.log(allPlayers)
const {odds:{team1,team2,x:draw} } =game;

const printGoals = function(...players){
    console.log(players)
    console.log(typeof players)
    console.log(`${players.length} goals scored.`)
};

//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team1 is likely to win');
team1 > team2 && console.log('Team2 is likely to win');


for(const [index,playerName] of game.scored.entries()){
    console.log(`Goal ${index+1}:${playerName}`)
}



console.log(Object.keys(game.odds));
console.log(Object.values(game.odds));


let average = 0;
const odds = Object.values(game.odds);
for(const value of odds){
    average += value
}
console.log(average/odds.length)

const scorers = {};

for(const playerName of game.scored){
    scorers[playerName] = (scorers[playerName] || 0) +1
};
console.log(scorers)


for(const team of Object.keys(game.odds)){
    console.log(`Odd of victory ${game[team] ??'draw'}: ${game.odds[team]}`)
};

