// immediately invoked function expression (IIFE)
(function chai(){ //named iife
    console.log(`DATABASE CONNECTED`)
})();
// chai();
((name) =>{ //ifee
    console.log(`DATABASE CONNECTED ${name}`);
})('Mohit');