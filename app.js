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
    console.log(maxOfThree(5, 10, 1));

//3. done
function isCharAVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
    console.log("true");
    } else {
   return ("false");
    
    }
    }
    console.log(isCharAVowel('b'));
    
    //4. done

    const sumArray = function (array) {
let sum = 0;

for (let i = 0; i<array.length; i++) {
sum += array [i]
}
return (sum);
}
console.log(sumArray([5, 10, 1]));

//5. done
function multiplyArray (array){
    let product= 1;
for (let i = 0; i<array.length; i++) {
product *= array [i]
}
return (product)
}

console.log(multiplyArray([5, 10, 2]));

//6. done
const numArgs = function (...argument) {
    return argument.length;
};

console.log(numArgs('test', true, 5));

//7.done
function reverseString (string) {
    let array = string.split('');
    return array.reverse().join('');
    }

console.log(reverseString('rockstar'));

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
    console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning'])); 
    

//9. done
function stringsLongerThan (arr, len){
return arr.filter(function (s){
	return(s.length>len);
});
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
