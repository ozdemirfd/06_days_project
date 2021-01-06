/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
*/
var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairIndex=pairsByIndexRaw.filter(item=>Array.isArray(item)&& item.length===2);

let pairs=pairIndex.map(item=>{
  var student=students[item[0]];
  var mentor=mentors[item[1]];
  return [student,mentor]

})

console.log(pairs)

// pairsByIndexRaw.map(item=>{
//   if(Array.isArray(item)&&item.length===2){
//     console.log(students[item[0]]+"-"+mentors[item[1]])
//   }
// })