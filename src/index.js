//Explicit 
var namee = "Pranav";
//Implicit 
var firstname = "pranav";
firstname = 22;
//any
var v = true;
v = "string";
Math.round(v);
//type:never : never effectively throws an error whenever it is defined.
var x = true;
//Type: undefined & null
var y = undefined;
var z = null;
//TypeScript Arrays
var names = [];
names.push("Dylan");
//Readonly :can prevent arrays from being changed
var namees = ["pranav"];
namees.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
//Type Inference :TypeScript can infer the type of an array if it has values.
var numbers = [1, 2, 3];
numbers.push(4);
numbers.push("2");
var head = numbers[0];
//Typed Arrays
var ourTuple;
ourTuple = [5, true, "yes"];
//Named tuples:provide context for our values at each index
var graph = [55.2, 41.3];
//Destructuring Tuples
var graphs = [55.2, 41.3];
var a = graphs[0], b = graphs[1];
//Object Types 
var car = {
    type: "Maruti",
    model: "alto",
    year: 2023
};
//Type Inference :infer the types of properties based on their values.
var cars = { type: "Toyota", };
cars.type = "Ford";
cars.type = "Ford";
cars: type = 2;
//Index Signatures: objects without a defined list of properties
var nameAgeMap = {};
nameAgeMap.Jack = 25;
//TypeScript Enums:An enum is a special "class" that represents a group of constants (unchangeable variables)
//two enums string nd numeric
//Numeric Enums - default, enums will initialize the first value to 0 and add 1 to each additional value:
var directions;
(function (directions) {
    directions[directions["North"] = 0] = "North";
    directions[directions["East"] = 1] = "East";
    directions[directions["West"] = 2] = "West";
    directions[directions["South"] = 3] = "South";
})(directions || (directions = {}));
var currentDirection = directions.North;
console.log(currentDirection);
//fully initiliazed
var Status;
(function (Status) {
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["Success"] = 200] = "Success";
    Status[Status["Accepted"] = 202] = "Accepted";
    Status[Status["BadRequesr"] = 400] = "BadRequesr";
})(Status || (Status = {}));
console.log(Status.NotFound);
console.log(Status.Success);
var caryear = 2001;
var cartype = "Renault";
var carmodel = "Duster";
var car = {
    year: caryear,
    type: cartype,
    model: carmodel
};
var rectangle = {
    height: 20,
    width: 30,
};
var coloredRectangle = {
    height: 89,
    width: 20,
    color: "red"
};
//Union Types used when a value can be more than a single type.
function ok(code) {
    console.log('my stastus code is ${code}');
}
ok(23);
ok("twentythre");
//TypeScript Functions 
//  TypeScript has a specific syntax for typing function parameters and return values.
// Return type
function getTime() {
    return new Date().getTime();
}
// Void Return Type: function doesn't return any value.
function printHello() {
    console.log('Hello!');
}
// Parameters: typed with a similar syntax as variable declarations.
function multiply(a, b) {
    return a * b;
}
// Optional Parameters By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
// TypeScript Classes:types and visibility modifiers to JavaScript classes
//Members: Types
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.nname = "pranav";
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    Persons.prototype.getName = function () {
        return this.name;
    };
    return Persons;
}());
var persons = new Persons("Jane");
console.log(persons.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
