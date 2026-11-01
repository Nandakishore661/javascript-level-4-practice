// Arrays – 10 questions


// [ ] 1. Create an array of 10 numbers and print all elements using a for loop.

let arr = [10,20,30,40,50,,60,70,80,90,100];
for (let i = 0; i < arr.length ; i++){
     console.log(arr[i]);
}




// [ ] 2. Find the sum and average of all array elements.

let arr = [10,20,30,40,50];
let sum = 0;
for (let i = 0; i < arr.length;i++){
    sum = sum + arr[i];
}
let avarage = sum / arr.length;
console.log("sum=", sum);
console.log("avarage=", avarage);

// [ ] 3. Find the largest and smallest numbers without using Math.max() or Math.min().

let arr = [45, 12, 89, 34, 7, 65];

let largest = arr[0];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
        largest = arr[i];
    }

    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("Largest:", largest);
console.log("Smallest:", smallest);


// [ ] 4. Count positive, negative, and zero values in an array.

let arr = [10, -5, 0, 20, -8, 0, 15, -2];
let positive = 0;
let negative = 0;
let zero = 0;

for(let i = 0; i< arr.length; i++){
    if (arr[i]> 0) {
        positive++;
    }
    else if(arr[i]< 0) {
        negative++;
    }
    else {
        zero++;
    }
    

}
console.log('positive:', positive);
console.log("negative:", negative);
console.log("zero:", zero);



// [ ] 5. Reverse an array without using reverse() or slicing.

let arr = [10,20,30,40,50];
let reverse = [];

for (let i = arr.length -1; i >=0; i--){
    reverse[reverse.length]= arr[i];
} 
console.log(reverse);


// [ ] 6. Find the second smallest distinct number in an array.

let arr = [10, 5, 20, 5, 8, 15];
let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++){
    if (arr[i] < smallest){
        secondsmallest = smallest;
        smallest = arr[i];

    }
    else if (arr[i] < secondSmallest && arr[i] !== smallest){
        secondSmallest = arr[i];
    }
}
console.log("Second smallest:", secondSmallest);

// [ ] 7. Remove duplicate values without using Set.

let arr = [10, 20, 10, 30, 20, 40, 50];
let result = [];

for (let i = 0; i <arr.length; i++){
    let found = false;
    for (let j = 0; j < result.length; j ++){
        if (arr[i] ===result[j]){
            found = true;
            break;
        }
        
    }
    if (found === false){
        result[result.length] = arr[i];
    }
}
console.log(result);


// [ ] 8. Find the common elements between two arrays.

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [20, 40, 60, 80, 10];

let common = [];

for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
            let found = false;
            for (let k = 0; k < common.length; k++){
                if (arr1[i] === common[k]){
                    found = true;
                    break;
                }
            }
            if (found === false){
                common[common.length] = arr1[i];
            }
        }
    }
}
console.log(common);

// [ ] 9. Sort an array in ascending order without using sort().

let arr = [50, 20, 40, 10, 30];
for (let i =0; i < arr.length -1; i++){
    for(let j = 0; j < arr.length-1 -i ; j++){
        if (arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);

// [ ] 10. Find the frequency of each number in an array.

let arr = [10, 20, 10, 30, 20, 10, 40];

let visited = [];

for (let i = 0; i < arr.length; i++) {

    if (visited[i] === true) {
        continue;
    }

    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            count++;
            visited[j] = true;
        }
    }

    console.log(arr[i] + " = " + count);
}



// Strings – 10 questions


// [ ] 11. Reverse a string without using reverse().

let str= "hello";

let reverse = "";
for (let i = str.length -1 ; i >=0; i--){
    reverse = reverse + str[i];
}
console.log(reverse);

[ ] 12. Check whether a string is a palindrome.

let str = "racecar";
let result = "";

for (let i = str.length -1; i >=0; i--){
    result = result + str[i];
}
if (str ===result){
    console.log(str + " is a palindrome");
}
else{
    console.log(str + " is not a palindrome");
}


// [ ] 13. Count vowels, consonants, digits, and spaces.

let str = "Hello World 123";
let vowels = 0;
let consonants = 0;
let digits = 0;
let spaces = 0;

for (let i =0; i < str.length; i++){
    let ch = str[i].toLowerCase();
    if (ch >= 'a' && ch <= 'z'){
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            vowels++;
        }
        else{
            consonants++;
        }
    }
    else if (ch >="0" && ch <= "9"){
        digits++;
    }
    else if (ch === " "){
        spaces++;
    }


}
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
console.log("Digits:", digits);
console.log("Spaces:", spaces);

// [ ] 14. Find the first non-repeating character.

let str = "aabbcde";
let found = false;
for (let i = 0; i < str.length; i++){
    let count = 0;
    for (let j = 0; j < str.length; j++){
        if (str[i] === str[j]){
            count++;
        }
    }
    if (count === 1){
        console.log("First non-repeating character:", str[i]);
        found = true;
        break;
    }
}
if (!found){
    console.log("No non-repeating character found");
// }

// [ ] 15. Find the frequency of each character.

let str = "banana";

let visited = [];

for (let i = 0; i < str.length; i++) {

    if (visited[i] === true) {
        continue;
    }

    let count = 1;

    for (let j = i + 1; j < str.length; j++) {

        if (str[i] === str[j]) {
            count++;
            visited[j] = true;
        }
    }

    console.log(str[i] + " = " + count);
}





// [ ] 16. Remove duplicate characters from a string.

let str = "programming";
let result = "";

for (let i = 0; i < str.length; i++){
    let found = false;
    for (let j = 0; j < result.length; j++){
        if (str[i] === result[j]){
            found = true;
            break;
        }
    }
    if (found === false){
        result = result + str[i];
    }
}
console.log(result);


// [ ] 17. Convert the first letter of every word to uppercase.

let str = "javascript is easy to learn";

let result = "";
let makeUpper = true;

for (let i = 0; i < str.length; i++) {

    if (str[i] === " ") {
        result = result + str[i];
        makeUpper = true;
    }
    else if (makeUpper === true) {
        result = result + str[i].toUpperCase();
        makeUpper = false;
    }
    else {
        result = result + str[i];
    }
}

console.log(result);


// [ ] 18. Check whether two strings are anagrams.

let str1 = "listen";
let str2 = "silent";

if (str1.length !== str2.length) {

    console.log("Not Anagrams");

}
else {

    let count = 0;

    for (let i = 0; i < str1.length; i++) {

        for (let j = 0; j < str2.length; j++) {

            if (str1[i] === str2[j]) {
                count++;
                str2 = str2.substring(0, j) + "#" + str2.substring(j + 1);
                break;
            }
        }
    }

    if (count === str1.length) {
        console.log("Anagrams");
    }
    else {
        console.log("Not Anagrams");
    }
}
// [ ] 19. Find the longest word in a sentence.

let str = "JavaScript is a powerful programming language";

let words = str.split(" ");

let longest = "";

for (let i = 0; i < words.length; i++) {

    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log("Longest word:", longest);

// [ ] 20. Replace every space in a string with a hyphen without using replace().

let str = "JavaScript is very easy";

let result = "";

for (let i = 0; i < str.length; i++) {

    if (str[i] === " ") {
        result = result + "-";
    }
    else {
        result = result + str[i];
    }
}

console.log(result);