// Setup
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {


    if(collection[id].prop) {
        if(prop !=='tracks' && collection[id][prop]){
            collection[id].prop =value
        }
        if (prop === 'tracks' && !collection[id].prop.length > 0) {
            collection[id].tracks.push(value)
        }
        if (prop === 'tracks' && collection[id].prop.length > 0) {
            collection[id].tracks.push(value)
        }
    }
    if(!value.length >0){
        delete collection[id][prop]
    }

    return object;
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
// console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));


