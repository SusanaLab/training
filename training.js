//Evaluar si una cadena tiene espacios y eliminarlos

function noSpace(x){
    let result = x.replace(/ /g, "");
      return result
      
}
noSpace("hola pe u k")
console.log(noSpace("hola pe u k"))


// encontrar el numero mas grande y el mas pequeño 
function highAndLow(numbers){
    //separar string
    //Ordenar arreglo
    var data = numbers.split(" ").sort(function(a, b){ return a-b})
    //Tomar el numero mayor
    let maxValue= data.slice(-1)
      //console.log(maxValue)
      //Tomar el numero menor
    let minValue= data.slice(0,1);
        //console.log(minValue)
        //unir ambos valores y convertirlos a string
    let result = (maxValue + " " + minValue).toString();
      //console.log(result)
      return result
    }

   let res = highAndLow();
    console.log(highAndLow("1 2 -3 4 5"))
    document.getElementById("answer1").innerHTML = res;

 //Transformar palabra   
    function transform(source, target) { //car.  see
      let arr = []
      arr.push(source);
        console.log(arr)
      let sourceA = source.split(''); // ['c', 'a', 'r'];
      let targetA = target.split(''); // ['s', 'e', 'e'];
      
      for(let index = 0; index < target.length ; index++) {
        //index = 0
        //index = 1
        //index = 2
        
        const letterSource = sourceA[index]; //c
        const letterTarget = targetA[index];// s 
        //console.log("letra de source: " + letterSource)
          //console.log("letra de target: " +letterTarget)
        if(letterSource != letterTarget) {
          //evitar duplicados
          sourceA[index] = letterTarget; //  s remplaza c
          //console.log( sourceA[index] )
          const unir = sourceA.join("");// "sar";
          //console.log(sourceA.join(""))
          arr.push(unir);  
          
        }
          
      }
      //console.log(arr);
      
      return arr;
    
      
    }
    transform()
    console.log(transform(car, see ))


    //Morse 
  /*   var uniqueMorseRepresentations = function(words) {
      let ab="abcdefghijklmnopqrstuvwxyz";
      let Morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
      let abc = ab.split("");
      let result = 0;
      let res ="";
      let newArr =[];
       for(let i=0; i<words.length; i++){
           newArr.push(words[i].split(""))
         console.log( newArr)
        }
       for(let k=0; k<newArr.length; k++){
      for(let i=0; i<abc.length; i++){
      for(let j=0; j<Morse.length; j++){
        if (newArr[k]===abc[i] )
          console.log("es igual " )
      }
      }
      }
  }; */

  //Cambiar string por una palabra en especifico

  function changeWords(x){
    console.log(x)  
    let wordChange= "hola "
     let separ = x.split(' ');
      console.log(separ.length)
      if(x === "") {
        return ""
      }
      let result = wordChange.repeat(separ.length).slice(0, -1);
      console.log(result)
    return result
        
  }
  changeWords("hola")
  console.log(changeWords("esto es una prueba"))

//Imprime el numero primo mayor y menor que el numero que ingresas en la funcion

  function primeBefAft(num) {
    let noPrimo = [];
    let primo = []
    let arrayFinal= primo;
    
    
    for(let i = 0;i <= num+10;i++){  
      if (i%5 === 0){
        noPrimo.push(i)
      }else if (i%3 === 0){
        noPrimo.push(i) 
      }else if(i%2 ===0){
        noPrimo.push(i)   
      } else{
        primo.push(i) 
      }
    }
  
    let lesss = arrayFinal.filter(number => number < num).reverse(); 
    let greater = arrayFinal.filter(number => number > num); 
    let menor = lesss[0];
    console.log(menor)
     let mayor = greater[0];
    console.log(mayor)
    let result = [menor, mayor]
    console.log(result)
    return result
    
    
  }

  primeBefAft(34)
  console.log(primeBefAft(34))

  //For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

/* Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc).
Write a function where you will win the game if your numbers can spell "BINGO".
They do not need to be in the right order in the input array. Otherwise you will lose. 
Your outputs should be "WIN" or "LOSE" respectively. */

  let lose =[1,2,3,4,5,6,7,8,9,10]
let win = [21,13,2,7,5,14,7,15,9,10]

function bingo(a) {
console.log(a)
  console.log(a.includes(2| 9| 14| 7| 8) ? "WIN": "LOSE")
  return a.includes(2| 9| 14| 7| 8) ? "WIN": "LOSE"
}
bingo(win)
console.log(bingo(lose))