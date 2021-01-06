
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

function makeArray(array){
  let newArray=[]
  for(var a=0;a<array.length;a++){
    let short= array[a].substring(0,3).toUpperCase();
    let count=array[a].length;
     newArray.push([array[a],short,count])
  }
  
  return newArray;
}



console.log(makeArray(countries))



// Add "-" after every even number
const numbers = "315469781318158";

function generate(str){
  let sum="";
  for(var a=0;a<str.length;a++){
    if(str[a]%2==0 && a!==str.length-1){
      sum=sum+str[a]+"-"
    }else{
      sum=sum+str[a]
    }
      
      
  }
  return sum;
}




console.log(generate(numbers))



// Find odd numbers
 var arr = [5, 24, 122, 625, 3125, 15625];
 var newarray = arr.map(myFunction)

function myFunction(num) {
 return num/25
}

console.log(newarray)