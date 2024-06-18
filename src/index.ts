//Explicit 
let namee:string = "Pranav";

//Implicit 
let firstname = "pranav";
 firstname = 22;


//any
let v:any = true;
v = "string";
Math.round(v);

//type:never : never effectively throws an error whenever it is defined.
let x:never = true;

//Type: undefined & null
let y: undefined = undefined;
let z: null = null;


//TypeScript Arrays
const names: string[] = [];
names.push("Dylan");


//Readonly :can prevent arrays from being changed
const namees: readonly string[] = ["pranav"];
namees.push("Jack");// Error: Property 'push' does not exist on type 'readonly string[]'.


//Type Inference :TypeScript can infer the type of an array if it has values.

const numbers =[1,2,3];
numbers.push(4);
numbers.push("2");
let head: number = numbers[0];

//Typed Arrays
let ourTuple: [number,boolean,string];
ourTuple =[5,true,"yes"]

//Named tuples:provide context for our values at each index
const graph: [x:number,y:number]= [55.2,41.3];

//Destructuring Tuples
const graphs:[number ,number]= [55.2,41.3];
const [a,b]= graphs;

//Object Types 
const car:{type:string ,model:string,year:number }={
    type:"Maruti",
    model:"alto",
    year:2023
}

//Type Inference :infer the types of properties based on their values.
const cars = { type: "Toyota",};
cars.type = "Ford";
cars.type = "Ford";
cars:type = 2;

//Index Signatures: objects without a defined list of properties
const nameAgeMap: {[index:string]:number} = {};
nameAgeMap.Jack = 25;


//TypeScript Enums:An enum is a special "class" that represents a group of constants (unchangeable variables)
//two enums string nd numeric

//Numeric Enums - default, enums will initialize the first value to 0 and add 1 to each additional value:
enum directions{
    North,
    East,
    West,
    South
}
let currentDirection = directions.North;
console.log(currentDirection);
//fully initiliazed

enum Status {
    NotFound =404,
    Success =200,
    Accepted= 202,
    BadRequesr = 400,
}

console.log(Status.NotFound);
console.log(Status.Success);


// TypeScript Type Aliases and Interfaces 
//Type Aliases allow defining types with a custom name (an Alias) ,
//Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type Caryear = number 
type Cartype= string
type Carmodel = string 
type Car = {
    year: Caryear,
    type: Cartype,
    model:Carmodel
}

const caryear: Caryear = 2001
const cartype: Cartype = "Renault"
const carmodel: Carmodel = "Duster"
const car: Car = {
year: caryear ,
type: cartype,
model: carmodel
};

// Interfaces similar to type aliases, except they only apply to object types.
 interface Rectangle {
    height: number,
    width: number 
 }

 const rectangle:Rectangle = {
    height:20,
    width:30,
 };

 interface ColoredRectangle extends Rectangle{
    color:string
 }

 const coloredRectangle: ColoredRectangle = {
    height:89,
    width:20,
    color:"red"
 };

 
 
 //Union Types used when a value can be more than a single type.
 function ok(code: string | number){
    console.log('my stastus code is ${code}')

 }
 ok(23);
 ok("twentythre");


 //TypeScript Functions 
//  TypeScript has a specific syntax for typing function parameters and return values.


// Return type

function getTime():number{
    return new Date().getTime();
    }

// Void Return Type: function doesn't return any value.
function printHello(): void {
  console.log('Hello!');
}

// Parameters: typed with a similar syntax as variable declarations.
function multiply(a: number, b: number) {
  return a * b;
}

// Optional Parameters By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// TypeScript Classes:types and visibility modifiers to JavaScript classes

//Members: Types
class Person{
    nname: string;
}

const person = new Person();
person.nname= "pranav";

class Persons {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const persons = new Persons("Jane");
  console.log(persons.getName());

//   Inheritance: Implements:define the type a class must follow through the implements keyword.

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}