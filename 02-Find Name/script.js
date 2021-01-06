/* 
  You are given an array of names.
*/

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

function name(arr){
  
 const first= arr.find(name=>name.length>7 && name.startsWith("A"));
  return first;
}
console.log(name(names));




function name1(arr){
  
 const first= arr.filter(name=>name.indexOf("A")!==0);
  return first;
}


console.log(name1(names));



/* EXPECTED OUTPUT */
// "Alexandra"
