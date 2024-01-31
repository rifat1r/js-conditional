const salary = 21000 ;
const isBCS = true ;
const height =  61 ;
hasCar = false ;

// if (salary > 2000 && height > 66) {
//     console.log('su------patro')
// }
// else {
//     console.log('onno patro khuji')
// }
// if (salary > 25000 || height > 72){
//     console.log('eso baba kobul')
// }
// else {
//     console.log('vaag tui mokbul')
// }

// more and more condition

// if (salary > 25000 || height > 72 || isBCS == true){
//     console.log('eso baba kobul')
// }
// else {
//     console.log('vaag tui mokbul')
// }
if (salary > 25000 && height > 72 && isBCS == true){
    console.log('eso baba kobul')
}
else {
    console.log('vaag tui mokbul')
}
// ----------------- complex condition-------//

if ((salary > 2500 && hasCar == true) || isBCS == true) {
console.log('eso baba kobul')
}
if ((salary > 2500 || hasCar == true) && isBCS == true) {
console.log('eso baba kobul')
}

