const intros = ['Knock, knock!', 'A horse walks into a bar.', 'What do you get when you combine a'];

let jokeMiddles = {
    knockMiddles: ['Orange', 'Leon', 'Quiche' ],
    barMiddles: ['The shocked bartender points a finger his way in alarm and yells, “Hey!”', 'He says to the bartender "If you ask \'why the long face?\', I\'m going to kick you in the nits!"', 'He orders a drink and puts a can of pepper spray on top the bar.'],
    combineMiddles: ['kangaroo with a donkey?', ' monster and a boy scout?', 'the Rock and E.T.?']
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
        console.log('If loop Knock Knock');
        middle = jokeMiddles.knockMiddles[getRandom()];
        end = jokeEnds.knockEnds[getRandom()];
    } else if (beginning === 'A horse walks into a bar.') {
        console.log('If loop Bar');
        middle = jokeMiddles.barMiddles[getRandom()];
        end = jokeEnds.barEnds[getRandom()];
    } else {
        console.log('If loop combine');
        middle = jokeMiddles.combineMiddles[getRandom()];
        end = jokeEnds.combineEnds[getRandom()];
    }
}
buildJoke(beginning);

console.log(beginning);
console.log(middle);
console.log(end);
