// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));


//2. done
const maxOfThree = function (a,b,c) {
    if (a >= b && a >= c){
    return a;
    } else if (b >= a && b >= c){
    return b;
    } else {
    return c;
    }
    };

//3. done
function isCharAVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
    console.log("true");
    } else {
    console.log("false");
    
    }
    }
    
    //4. done

    const sumArray = function (array) {
let sum = 0;

for (let i = 0; i<array.length; i++) {
sum += array [i]
}
console.log(sum);
}
sumArray([1,2,3,4]);

//5. done
function multiplyArray (array){
    let product= 1;
for (let i = 0; i<array.length; i++) {
product *= array [i]
}
console.log(product)
}
multiplyArray([2,2,3]);

//6. done
const numArgs = function (...argument) {
    return argument.length;
};


//7.done
function reverseString (string) {
    let array = string.split('');
    return array.reverse().join('');
    }

//.8 done
const longestStringInArray = function (arr){
    let longest= arr [0];
    for (let i= 1; i<arr.length; i++){
    if (arr[i].length > longest.length) {
    longest = arr [i]
    }
    }
    return longest.length;
    }
    
//9. done
function stringsLongerThan (arr, num) {
let strings = []
for (let i = 0; i<arr.length; i++){
    if(arr[i].length > length){
        string.push(arr [i ])
    }
} return strings;

}
    console.log(stringsLongerThan(["hello", "hi", "when","where","who" ] , 5));
