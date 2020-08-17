// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Only change code below this line
function updateRecords(id, prop, value) {
// for (var k in collection) {
    if (collection[id].artist==prop && collection[id].artist){
        collection[id].artist=value
    }
    if (collection[id].tracks ==prop && collection[k].tracks.length == 0){
        var array_val =[]
        array_val.push("one")
        collection[id].tracks=array_val
    }
    if (collection[id].tracks==prop && collection[id].tracks.length > 0 ){
        collection[id].tracks.push("first push")
    }
    if (collection[id].prop=='' ){
        delete collection[id].prop
    }


    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
