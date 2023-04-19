// # Question

const infoName = "W A N G E L";
const removeSpaces = infoName.replaceAll(" ", "")

console.log (removeSpaces) // WANGEL


// # Question 9
function isDivisibleBy10(num) {
    return num % 10 === 0;
}
console.log(isDivisibleBy10(50)); // true
console.log(isDivisibleBy10(21)); // false
console.log(isDivisibleBy10(100)); // true
console.log(isDivisibleBy10(43)); // false
    
// # Question 10

function vowelCounter(str){
    let count = 0;
    const vowels = "aAeEiIoOuU"
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log("The word has ", vowelCounter("Manga"), " vowels.");
console.log("The word has " , vowelCounter("Bamboozled"), " vowels.");
console.log("The word has " , vowelCounter("Captain"), " vowels.");
console.log("The word has " , vowelCounter("Anime"), " vowels.");
console.log("The word has " , vowelCounter("Eutopia"), " vowels.");




