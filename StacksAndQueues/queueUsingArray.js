var q =[];
q.push("FIRST")
q.push("SECOND")
q.push("THIRD")

console.log(q)
q.shift()
console.log(q)
q.shift()
console.log(q)
q.shift()
console.log(q)


// not very efficient because there is shifting and re-indexing of items
var w =[];
w.unshift("FIRST")

w.unshift("SECOND")

w.unshift("THIRD")

console.log(w)
w.pop()
console.log(w)
w.pop()
console.log(w)
