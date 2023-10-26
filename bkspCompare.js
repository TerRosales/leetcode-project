// 844. Backspace String Compare
// Easy
// Topics
// Companies
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.
// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".


// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.


//------------------------------Starting Code-------------------------//

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var backspaceCompare = function(s, t) {
    
// };

//------------------------------Starting Code-------------------------//


var backspaceCompare = function(S, T) {
    // this splits the input strings S and T to arrays of characters.
    let arr1 = S.split('');
    let arr2 = T.split('');
    
    // assigning filtered1 and filtered2 to the function that processes and filters the character array arr1 and arr2.
    let filtered1 = processorFilter(arr1);
    let filtered2 = processorFilter(arr2);

    // makes sure that the filtered arrays are not the same in both value and data type then if it is not, return false.
    if (filtered1 !== filtered2) return false;


    // checks through the filtered arrays and check if each one of characters are not equal.
    for (let i = 0; i < filtered1; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }


    // return true, if all characters are equal
    return true;
};


// this processes and filters the character array.
function processorFilter(chars) {
    // first we wanna initialize a counter variable counter to 0.
    let counter = 0;
    // then we can loop through each character c in the input array chars.
    for (let c of chars) {
        // then we wanna see if the current character c is not equal to '#'.
        if (c !== '#') {
            // If its not '#', update the character at index counter in the array chars to be c, and then increment the value of counter.
            chars[counter++] = c;
        } else if (counter > 0) {
            // If the character is '#', and counter is greater than 0 which basically means that there is a character beside '#'.
            // we will decrease counter by itself. This will remove the last character by reducing the length of the array that is being filtered.
            counter--;
        }
    }
    // finally we return value of counter, which will show the new length of the filtered character array.
    return counter;
}


