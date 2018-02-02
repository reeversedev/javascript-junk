var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]


/* With Map */
var names = animals.map((animal) =>  animal.name);



/* With For Loop
var names = [];
for(var i = 0; i < animals.length; i ++) {
    names.push(animals[i].name);
}
*/


console.log(names);