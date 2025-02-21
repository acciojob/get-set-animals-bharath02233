class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a generic sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat Class extending Animal
class Cat extends Animal {
    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Dog Class extending Animal
class Dog extends Animal {
    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
