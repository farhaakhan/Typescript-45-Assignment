function show_magicians(magicians) {
    magicians.forEach(function (magicians, index) {
        console.log("".concat(index + 1, ". ").concat(magicians));
    });
}
console.log("These are Pakistani Magicions!");
var pakistaniMagicians = ["Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];
show_magicians(pakistaniMagicians);
