/* 
What is Closure ?
what is implicit function , all types of implicite things in js
this keyword
implicit return vs explicit return
immdiatly invoked function expression , why when where - for multiple IIFE we need to use ; to end one execution
named iife , parameter passing and exucuting multiple iife
what is map?
for of / for in / for each loop
what is callback fun
object destructuring
! how js works and control flow in js is pending - chai aur code 
* DOM - 
-innerHTML vs innetContent vs innerText
-all types of css selectors and their syntax
-queryselector
-what is nodelist & HTMLCollection / how differ from array / 
convert it into array using - Array.from(nodelist)
-while using querySelectorAll it gives us elements in NodeList or HTMLCollection so we have to     convert them into array first then apply map , reduce , filter
- firstElementChild / lastElementChild / parentElement / nextElementSibiling / childNodes

*/

//** For of Loop */
// let arr = [1,2,3,4,5];
// for (const i of arr) {
//     console.log(i);  
// }
// for of doesnt work on objects

//** For Each Loop */
// arr.forEach( (item)=>{
//     console.log(item);
    
// }) 
// for each loop has access to whole array , item and index in the callback function (item,index,array)

//** Reduce */
//  let ShoppingCart = [
//     {
//         itemname : "Phone",
//         price : 1000,
//     },
//     {
//         itemname : "Laptop",
//         price : 50000,
//     },
//     {
//         itemname : "Pen",
//         price : 1000,
//     },
//     {
//         itemname : "Headphone",
//         price : 1500,
//     }
//  ]

// const totalPrice =  ShoppingCart.reduce((acc , curr)=> acc + curr.price,0)
//  console.log(totalPrice)