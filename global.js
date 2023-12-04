/** Leason 03 */

// Global Object

//console.log(global);

setTimeout( () =>{
    console.log('Hello, AZAD');
    clearInterval(inter);
}, 3000);

const inter = setInterval( () => {
    console.log('Hello Agian!!');
}, 1000);

console.log(__dirname);
console.log(__filename);
//console.log(document.querySelector); // node has no access to DOM methods
