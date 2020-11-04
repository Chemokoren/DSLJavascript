var regex = /\d+/g;
// var string = "you can enter maximum 500 choices";
var string ="the 5is 108 seCONd4 a"
var matches = string.match(regex);  // creates array from matches

// console.log(matches);


var lines = string.toString().split('\n'),
    a = parseInt(lines[0])
// Output the variable to STDOUT
// console.log(a)
// console.log(typeof a)
// var sum =0;
// for (var i = 0; i < a.length; i++) {
//     sum += a[i]
// }
// console.log(sum)


// var stdin = string;
// process.stdin.on('data', function (chunk) {
//     stdin += chunk;
// }).on('end', function() {
//     var lines = stdin.split('\n');
//     for(var i=0; i<lines.length; i++) {
//         // process.stdout.write(lines[i]);
//         console.log(lines[i])
//     }
// });



// // Read the variable from STDIN
// process.stdin.on(a, function(chunk) {
//     var lines = chunk.toString().split('\n'),
//         a = parseInt(lines[0])
//     // Output the variable to STDOUT
//     var sum =0;
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i]
//     }
//     return sum
//     // process.stdout.write(sum);
//
//     console.log('anii')
// })


// Read the variable from STDIN

    var lines = string.toString().split('\n'),
        a = parseInt(lines[0])
    // Output the variable to STDOUT
console.log(a)
    var sum =0;

    for (var i = 0; i < a.length; i++) {
        sum += a[i]
    }
    console.log(sum)
    // process.stdout.write(sum);

    console.log('anii')

// })


function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

    // console.log(_calculateAge("1/1/1990"))


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

    console.log(getAge("1/1/1990"))


function slowHash(key){
    for(var i =0; i<1000;i++){
        // console.log("everyday i'm hashing");
    }
    return key[0].charCodeAt(0);
}
    console.log(slowHash("c"))
