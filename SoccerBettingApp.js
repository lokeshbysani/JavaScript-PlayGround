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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
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


