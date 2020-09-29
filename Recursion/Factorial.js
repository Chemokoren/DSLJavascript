function fuctorial(num){
    if(num === 1) return 1
    return num *=fuctorial(num-1)
}
console.log(fuctorial(5))
