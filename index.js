

const flowers = ['joba', 'seuli', 'beli', 'gondoraj', 'bokol', 'golap'];
// use foreach()
// flowers.forEach((items, index) => {
//     console.log(items);
// })
const loop = flowers.forEach((items, index) => {
    console.log('This is items result-',items);
    
})
console.log('This is looping result-', loop);

const fruits = ['mango', 'orange', 'lemon', 'jackfruit', 'bannana'];
// use Map()loop
// fruits.map((items, index) => {
//     console.log(items);
// })
const looping = fruits.map((items, index) => {
    console.log(index,items);
    return  items
    // console.log(items);
})
// console.log('The result was',items);-items is not defined 
console.log('The map result was-', looping);

 
 