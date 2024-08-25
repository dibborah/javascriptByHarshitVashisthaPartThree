import firstName from './utils/fname.js'; // this is  default export 
// below is called named export
import ABC, { age as myAge } from './utils/age.js'// name aliases can be used to change names
// import human from './utils/Person.js';// This is default export
// In default export one can name the export any name directly w/o using name aliases
// import { Person2 } from './utils/Person.js';// This is called named export

// import Human, { Person2 } from './utils/Person.js';
import { Person2, Person } from './utils/Person.js';

console.log(firstName, myAge);

// const person1 = new Human('john', 'duo', '23');
const person1 = new Person('john', 'duo', '23');
person1.info();

const person2 = new Person2('ravi', 'shas', '24');
person2.info();

console.log(ABC);