// Return the provided string with the first letter of each word capitalized. Make sure the rest of
// the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
function toProperCase(s)
{
    return s.toLowerCase().replace( /\b((m)(a?c))?(\w)/g,
        function($1, $2, $3, $4, $5) { if($2){return $3.toUpperCase()+$4+$5.toUpperCase();} return $1.toUpperCase(); });
}
function titleCase1(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
function titleCase2(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
function titleCase3(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
console.log(titleCase3("I'm a little tea pot"));
