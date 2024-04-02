

// Function that receives a callback function 
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
        // This function can be named whatever you want
    }
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function() {
        // This is an anonymous function
    };
}
