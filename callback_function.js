<<<<<<< HEAD
function callback(){
    console.log("Callback function executed");
    // Additional logic can be added here
}

const add = (a,b,callback) => {
    var result = a +b;
    console.log("Result is: " + result);
    callback();
}
add(3,5, callback);

//inline arrow function
add(3,5, () => {
    console.log("Inline callback function executed");
    // Additional logic can be added here
=======
function callback(){
    console.log("Callback function executed");
    // Additional logic can be added here
}

const add = (a,b,callback) => {
    var result = a +b;
    console.log("Result is: " + result);
    callback();
}
add(3,5, callback);

//inline arrow function
add(3,5, () => {
    console.log("Inline callback function executed");
    // Additional logic can be added here
>>>>>>> 8eeb4eb95cf35ec59b2851a65d6466b220b3fa53
}   );