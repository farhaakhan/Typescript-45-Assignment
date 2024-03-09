//change guest list who not present
// guest list
var guest_list = ['farha', 'fouzia', 'laiba', 'areeba'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam . ' + guest_list[i] + ',\n\nnow invited you on dinner tomorow.\n\nthank you\n\n\ ');
}
var not_present = 'fouzia';
var new_guest = 'talat';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam .' + guest_list[i] + ',\n\now invited you on dinner tomorow. \n\nthank you\n\n\ ');
}
console.log("mis ".concat(not_present, " will not coming tomorow at dinner party"));
