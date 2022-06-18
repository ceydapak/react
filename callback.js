/*setTimeout(()=>{
console.log("hello");
}, 2000)*/

/*setInterval(()=>{
    console.log("hello, i'm working every seconds.")
},1000)*/

/*const sayHi = (cb)=>{
cb();
};

sayHi(()=>{
    console.log("hello");
});*/

import fetch from "node-fetch";
import axios from "axios";
/*fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then( users=> console.log(users));*/

async function getData(){
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    console.log(users);
    
    const {data: post1}= await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log(post1);

    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    console.log(post2);

}
getData();