import slugify from "slugify";
import {topla, hello,text, user,users} from "./mymodule.js";
//console.log("Hello node");

//var slugify = require('slugify')
const title= slugify('some string'); // some-string
console.log(title);
// if you prefer something other than '-' as separator
const title2= slugify('some string', '_')  // some_string
console.log(title2);

console.log(topla(2,4));
hello("ceyda");

console.log(user);
console.log(text);
console.log(users);