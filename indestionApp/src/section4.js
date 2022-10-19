class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() { return this.name; }
    getAge() { return this.age; }
    getGreeting() { return 'hello you nottie boyy'; }
    getDescription() { return `${this.name} is ${this.age} years old`; }
}

const me = new Person("barzi", 21);
console.log(me.getDescription())

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() { return !!this.major; }
    getDescription() {
        let description = super.getDescription();
        return `${description} is a ${this.major} major`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += `. I am from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const stu = new Student(`jack@example.com`, 22, "CPE");
const trav = new Traveler(`amandar@example.com`, 44, "suli");
console.log(stu.getDescription())
console.log(trav.getDescription())
console.log(trav.getGreeting())
