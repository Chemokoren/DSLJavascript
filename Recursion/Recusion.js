function countDown(num) {
    if (num <= 0) {
        console.log("All done!!")
        return;
    }
    console.log(num)
    num--;
    countDown(num);

}

countDown(5)


function factorial(num) {
    total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;

}
