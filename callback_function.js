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
}   );