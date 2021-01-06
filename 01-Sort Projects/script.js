/*
Create a function which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted numbers in ascending and descending order 

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/ 

const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];

function sortArray1(arr){
 const age=arr.filter(item=> typeof item =='number');
 return age.sort((a,b)=>a-b);
    
}
console.log(sortArray2(arrCase1))
console.log(sortArray1(arrCase1))

function sortArray2(arr){
  let age=[];
  for (var a=0;a<arr.length;a++){
    if(typeof arr[a]==='number'){
      age.push(arr[a])
    }
  }
  return age.sort((a,b)=>a-b);
}


/* ======= TESTS ===== */
