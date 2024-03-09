// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size.toUpperCase(), " and the message on it says: '").concat(message, "'."));
}
// Making a large shirt with default message
makeShirt();
// Making a medium shirt with default message
makeShirt("medium");
// Making a shirt of any size with a different message
makeShirt("small", "Good Looking!");
