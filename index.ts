// Type Annotation
import display from './annotation';

display(1, 'm');
display('1', 'm');

var employee : { 
    id: number; 
    name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */

// Variable Declaration

let x: number = 1;
const y: string = '1';
var z: boolean = true;

let y: string;

// Array
var fruits: Array<any> = ['Apple', 'Orange', 'Banana']; 
let fruits2: any[] = ['Apple', 'Orange', 'Banana']; 

let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
let values2: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 


// Tuple
let tuple: [number, string, boolean] = [1, 's', true];
let tuple2: Array<[number, string, boolean]> = [[1, 's', true], [1, 's', true]];

// Enum
enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
  }

  enum PrintMedia {
    Newspaper,
    Book,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3
}
// or
enum PrintMedia {
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Newspaper = 0,
    Book,
}

// Union
let i: (string | number);

// Any
let something: any = "Hello World!"; 
let arr: any[] = ["John", 212, true]; 

// Void
function sayHi(): void { 
  console.log('Hi!')
} 

function sayHi2(): number { 
  return 1;
} 

let speech: void = sayHi(); 
console.log(speech); //Output: undefined

// Function
function Sum(x: number, y: number) : number {
  return x + y;
}

function Sum(x: number, y: string) : number {
  return x;
}

let d: number = Sum(2,3);

// ? : Optional
function Greet(greeting: string, name?: string ) : string {
  return greeting + ' ' + name + '!';
}

// Overloading with the same number of params

/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */



// Interface
interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (number: number) => number; // arrow function
  getManagerName(number: string): string; 
}

abstract class VeezEmp {
  empCode: number;
  empName: string;
  constructor (id : number) {
    this.empCode = id;
  }

  display = () => {
    console.log(this.empCode);
  }
}

class VeezEmpEngineering extends VeezEmp {
  displayName = () => {
    console.log(this.empName);
  }
}

const veezEmpt1 = new VeezEmpEngineering(100);
veezEmpt1.display();


// Interface as type
interface KeyPair {
  key: number;
  value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" };

// Interface as function type
interface KeyValueProcessor
{
    (key: number, value: string): void;
};
function addKeyValue(key:number, value:string):void { 
  console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
  console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}


let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill');

kvp = updateKeyValue;
kvp(2, 'Steve');