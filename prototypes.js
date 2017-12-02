// const food = {
//     init: function (type) {
//         this.type = type
//     },
//     eat: function () {
//         console.log('you just ate the ' + this.type)
//     }
// }

// const waffle = Object.create(food);
// const carrot = Object.create(food);


// // Just changed the eat propery and see it's working.
// food.eat = function () {
//     console.log('YOU TOOOOOOOTALLY ATE THE  ' + this.type.toUpperCase());
// }

// waffle.init('waffle');
// waffle.eat();

// carrot.init('carrot');
// carrot.eat();

function talk() {
    console.log(this.sound);
}
let animal = {
    talk
}
 let cat = {
     sound: 'meow!'
 }
 let dog = {
     sound: 'woof!'
 }
 let prarieDog = {
     howl: function() {
         console.log(this.sound.toUpperCase())
     }
 }
 Object.setPrototypeOf(cat, animal);
 Object.setPrototypeOf(dog, animal);
 Object.setPrototypeOf(prarieDog, dog);
 cat.talk();
 dog.talk();
 prarieDog.howl();