
function maximumProduct(array){
if(array.length == 1 || array.length == 0) return 0;
        let maximumProduct = array[0]*array[1];
       for(let count = 0; count< array.length; count++){
           for(let counter = 0 ; counter<array.length;counter++){
               if(counter == count) continue;
               if(array[count]*array[counter]>maximumProduct) maximumProduct = array[count]*array[counter];
           }
       }
       return maximumProduct;
    }
    const readlineSync = require("readline-sync");
    const input = readlineSync.question("Enter a number")
    console.log(input)
    module.exports = maximumProduct;