//Write a program using for loop to print Numbers from 1 to 10.

for(let i=1; i<=10;i++){
    console.log(i);
}

//Write a program using while loop to sum of Numbers from 1 to 100.

let sum = 0;
let i =1;

while(i<=100){
    sum += i;
    i++ ;
}
console.log(`The sum from 1 to 100 is ${sum}`);


//Write a program using for loop to print all even numbers between 1 and 20.

for(let i=1 ; i<=20 ; i++){
    if(i %2 == 0){
        console.log(i);
    }
}

//Write a program using while loop to reverse the string (Softwarica)

let str = "Softwarica";
let reversedStr = "";
let r = str.length;

while (r--){
    reversedStr += str[r];
}
console.log("Reversed String:", reversedStr);

//Write a program to find the largest number of Array [5, 8, 12, 3, 7]

let arr = [5,8,12,3,7];
let largest = arr[0];

for (let i=1; i<arr.length ; i++){
    if (arr[i]> largest){
        largest = arr[i];
    }
}
console.log("The largest number is:",largest);


//Write a program using a for loop to print the multiplication table of a given number (e.g., 5).

let num=5;
for(let i=1 ; i<=10 ; i++){
    console.log(`5 x ${i} = ${5*i}`);
}


//Write a program using a while loop to count the number of digits in a given number.

let number= 12349525;
let count = 0;

while(number !== 0){
    number = Math.floor(number / 10);
    count++;
}
console.log("The number of digits is:", count);


//Write a program using a for loop to generate the first 10 numbers of the Fibonacci sequence.

let x = 0;
let y = 1;

console.log("Fibonacci Sequence:");
console.log(x);
console.log(y);

for(let i = 3 ; i<= 10 ; i++){
    let next = x+y;
    console.log(next);
    x=y;
    y=next;
}


//Write a program using a while loop to calculate the sum of digits of a given number.

let numbers = 1234;
let sums = 0 ;

while (numbers > 0){
    let lastDigit = numbers % 10;
    sums += lastDigit;
    numbers = Math.floor(numbers/10);
}
console.log("The sum of the digits is:", sums);


//Write a program using a for loop to count the number of vowels in a given string (e.g., "Softwarica").

function countVowels(inputString) {
    let count = 0;

    for (let char of inputString) {
        if ("aeiouAEIOU".includes(char)) {
            count++;
        }
    }

    return count;
}

const input =  prompt("Enter a string to count the vowels:");
console.log(`Number of vowels in "${input}":`, countVowels(input));


//Write a program using a while loop to check if a given string is a palindrome (reads the same backward as forward).

function isPalindrome(inputString) {
    let i = 0;
    let j = inputString.length - 1;

    while (i < j) {
        if (inputString[i] !== inputString[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const input1 = prompt("Enter a string:");
if (isPalindrome(input1)) {
    console.log(`${input1} is a palindrome.`);
} else {
    console.log(`${input1} is not a palindrome.`);
}

