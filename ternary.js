/****
 * TERNARY --> three parts
 * 
 * ?      :
 * 
 * condition ? do something when true  :  do something when false
 * 
*/

const age = 112 ;


//normal if-else 

// if (age >= 18) {
//     console.log('You can vote.')
// }
// else {
//     console.log('jaw ghumiye thako')
// }


// //simple ternary 
// age >= 18 ? console.log('you can vote') : console.log('go home');

let price = 100000;
const isLeader = true ;

// if (isLeader === true) {
//         price = 0;
//     }
//     else {
//             price = price + 100;
//         }
//         console.log(price);
        
          
        // price =  isLeader === true ? 0 : price + 200;
        // console.log(price);


    //    semi advance ternary
    // if (isLeader === true) {
    //     if (price >= 1000) {
    //         price = price/2;
    //     }
    //     else {
    //         price = 0;
    //     }
    // }
    // else {
    //     price = price+ 1000;
    // }
   
    
    //in ternary
    price = isLeader === true ?
     price >1000 ? price/2 : 0 
     : price + 100;

     console.log(price);
     