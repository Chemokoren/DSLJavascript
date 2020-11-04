// Description
// Dave is studying about JavaScript. He just learnt an awesome function to convert a string into integer.
//
//     Six months ago, he had written a useless code, which produces a random string 'line' of alphabets (uppercase and lowercase), digits and white spaces. It has no special characters.
//
//     Now he wants to fetch all the integers from 'line' and find their sum. The task seems easy, so he starts to code this problem at the DoSelect portal.
//
//     In the DoSeclect portal, he got a code snippet of this program.
//     Note: You can see the snippet in the code editor.
//
//     DoSelect snippet uses a class MyInteger, creates its object obj and calls the function sumInt() of this class. See following lines in the code snippet:
//     function MyInteger(){}
// var obj= new MyInteger();
// var ans= obj.sumInt(line);
//
// But the problem is that Dave is to implement this function sumInt as a member function of class MyInteger without using the keyword this and outside the class MyInteger.
//
// Can you help him?
//
//     Note: Your code must be between the comments: Your code starts here and Your code ends here in the code snippet.
//
//     Input
// A single line having string line.
//
//     Output
// The output should be the sum of all integers in line.
//
//     Constraints
// 1<= Length of line <= 500
//
// Sample Test Case
//
// Input
// the 5is 108 seCONd4 a
//
// Output
// 117
//
// Explanation
// Sum is: 5+108+4= 117
//
//
// Execution time limit
// Default.



// Read the variable from STDIN

var lines = chunk.toString().split('\n'),
    a = parseInt(lines[0])
// Output the variable to STDOUT
var sum =0;
for (var i = 0; i < a.length; i++) {
    sum += a[i]
}
process.stdout.write(sum);

console.log(a)
