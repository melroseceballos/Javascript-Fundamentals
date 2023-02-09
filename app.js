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
    
    //4.
