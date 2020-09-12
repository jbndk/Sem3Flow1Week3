//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

var mul = function(n1,n2){
  return n1 * n2
} 

var div = function(n1,n2){
  return n1 / n2
} 

//Callback example
var cb = function(n1,n2, callback){
    if (typeof n1 === "number" && typeof callback === "function") {
  return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1,n2);
    } else {
  return "Sorry, but you did not provide a number for n1 and/or a function for the callback";
    }
};

console.log( add(1,2) )     // What will this print?
console.log( add )          // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );      // What will it print 	
console.log( cb(3,3,add) ); // What will it print
console.log( cb(4,3,sub) ); // What will it print

try {
console.log(cb(3,3,add())); // What will it print (and what was the problem)
} catch (exception) {
    console.log("Sorry, but something went wrong.")
}

console.log(cb(3,"hh",add));// What will it print

console.log( cb(5,5,mul) );

console.log( cb(5,5,div) );