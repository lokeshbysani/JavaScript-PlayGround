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

//coding challenge 3

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ]);

//1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())]
console.log(events)


//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64)


// for(const team of Object.keys(game.odds)){
//     console.log(`Odd of victory ${game[team] ??'draw'}: ${game.odds[team]}`)
// };
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
for(const [time,game] of gameEvents){
    const timeSlot = time <= 45 ?'[FIRST HALF]':'[SECOND HALF]'
    console.log(`${timeSlot} ${time}: ${game}`)
}

