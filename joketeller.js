const intros = ['Knock, knock!', 'A horse walks into a bar.', 'What do you get when you combine'];

let jokeMiddles = {
    knockMiddles: ['Orange', 'Leon', 'Quiche' ],
    barMiddles: ['The shocked bartender points a finger his way in alarm and yells, “Hey!”', 'He says to the bartender "If you ask \'why the long face?\', I\'m going to kick you in the nuts!"', 'He orders a drink and puts a can of pepper spray on top the bar.'],
    combineMiddles: ['a kangaroo with a donkey?', 'a monster and a boy scout?', 'the Rock and E.T.?']
};

let jokeEnds = {
    knockEnds: ['Orange you glad I didn\'t say Banana!', 'Leon me when you\'re not strong!', 'Can I have a hug and a Quiche?' ],
    barEnds: ['The horse says, “You read my mind, buddy.”', 'The bartender exclaims "Woah! Woah! Woah! No need to be so coltish!"', 'The bartender proceeds to give him the drink and says “Why the strong mace?”'],
    combineEnds: ['A Kick-Ass animal!', 'A monster that can scare old ladies across the street!', 'A Rocket!']
};

const getRandom = () => {
    return Math.floor(Math.random()*3);
}

let beginning = intros[getRandom()];
let middle;
let end;

const buildJoke = (beginning) => {
    if (beginning === 'Knock, knock!') {
        middle = jokeMiddles.knockMiddles[getRandom()];
        end = jokeEnds.knockEnds[getRandom()];
    } else if (beginning === 'A horse walks into a bar.') {
        middle = jokeMiddles.barMiddles[getRandom()];
        end = jokeEnds.barEnds[getRandom()];
    } else {
        middle = jokeMiddles.combineMiddles[getRandom()];
        end = jokeEnds.combineEnds[getRandom()];
    }
}

const tellJoke = (begin) => {
    buildJoke(begin);
    if (begin === 'Knock, knock!') {
        console.log(beginning);
        console.log("Who's there?");
        console.log(middle);
        console.log(`${middle} who?`);
        console.log(end);
    } else {
        console.log(beginning+' '+middle+' '+end)
    };
}

tellJoke(beginning);