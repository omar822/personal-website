function focusFirstInput(event) {
  event.preventDefault()
  document.getElementById("name").focus()
}

// function changeClass(event) {
//   event.preventDefault()
//   document.getElementById("navigation__link").classList.remove("active")
// }

// let navLinks = document.querySelectorAll(".navigation__link")

// navLinks.forEach((link)=>{
//   link.addEventListener("click", (event)=>{
//     // event.preventDefault()

//     navLinks.forEach((navLink) => {
//       navLink.classList.remove("active")
//     })
//     link.classList.add("active")
//   })
// })


// let arr1 = [2, 4, 3]
// let arr2 = [5, 6, 4]

// var addTwoNumbers = function(arr1, arr2) {
//   var length = arr1.length > arr2.length ? arr1.length : arr2.length
//   let arr3 = [];
//   arr3.length = length
//   for (let el of arr1) {
//     for (let el2 of arr2) {
//       arr3.push(el + el2)
//     }
//   }
//   return arr3
// };

// console.log(addTwoNumbers(arr1, arr2));

// ///////////////////////////////
// let arr1 = [9,9,9,9,9,9,9];
// let arr2 = [9,9,9,9];

// var addTwoNumbers = function(arr1, arr2) {
//   let length = Math.max(arr1.length, arr2.length);
//   let arr3 = new Array(length).fill(0);

//   for (let i = 0; i < length; i++) {
//     let el1 = arr1[i] || 0;
//     let el2 = arr2[i] || 0;

//     let sum = arr3[i] + el1 + el2;
//     arr3[i] = sum % 10; // Keep only the unit digit

//     if (sum >= 10) {
//       // If the sum is 10 or more, carry over to the next digit
//       arr3[i + 1] = Math.floor(sum / 10) + (arr3[i + 1] || 0);
//     }
//   }

//   return arr3;
// };

// console.log(addTwoNumbers(arr1, arr2));
////////////////////////////////
// Final Solution
// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];

// var addTwoNumbers = function(l1, l2) {
//   let num1 = parseInt(l1.join(''))
//   let num2 = parseInt(l2.join(''))
//   let num3 = num1 + num2

//   let l3 = Array.from(String(num3), Number).reverse()

//   return l3
// };

// console.log(addTwoNumbers(l1, l2));

////////////////////////

// let obj = {
//   "I" : 1,
//   "V" : 5,
//   "X" : 10,
//   "L" : 50,
//   "C" : 100,
//   "D" : 500,
//   "M" : 1000,
// }

// let str = "XIV"

// let count = 0;
// for (let el1 of str) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (el1 === key) {
//         count += obj[key]
//       }
//     }
//   }
// }
// console.log(count);
/////////
// let myObject = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3'
// };

// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key)) {
//     console.log(key + ": " + myObject[key]);
//   }
// }

////////////////////////////////

// let address = "1.1.1.1"

// let defanged = address.replaceAll(".", "[.]")
// console.log(defanged);

///////////////////////
// Banned Words

// var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";

// var banned = ["hit"]

// var mostCommonWord = function(paragraph, banned) {
//     let smallWords = new Set(paragraph.toLowerCase().split(/\W+/g));
//     smallWords.has("hit")
// };

// console.log(mostCommonWord(paragraph));

///////////////

// Lesson 123 set data type and methods

// let myData = [1, 1, 1, 2, 3];
// let myUniqueData = new Set(myData);
// let myArray = Array.from(myUniqueData)
// console.log(myArray);

// console.log(myData);
// console.log(myUniqueData);
// console.log(myUniqueData.size);

//////////////
// elzero strings

// let theName = "  Ahmed  "
// let theList = [1, 2, 3, 4, 5]

// console.log(theName[0]);
// console.log(theName.charAt(5));
// console.log(theName.length);
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim()[2].toUpperCase());
// console.log(theName.trim().charAt(2).toUpperCase());

// let a = "Elzero Web School"

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));

// console.log(a.lastIndexOf("Web"));
// console.log(a.lastIndexOf("Web"));

// console.log(a.split("", 7));

// let a = "Elzero Web School"

// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));
// console.log(a.substring(-6, 2));
// console.log(a.substring(a.length - 5, a.length - 3));

// console.log(a.includes("Web"));
// console.log(a.startsWith("Web", 7));
// console.log(a.endsWith("l"));

// // 771. Jewels and Stones
// let jewels = "aA"
// let stones = "aAAbbbb"

// // My Solution
// var numJewelsInStones = function(jewels, stones) {
//     let jArray = jewels.split("")
//     let sArray = stones.split("")
//     let collectArray = []
//     for (j of jArray) {
//       for (s of sArray) {
//         if (j === s) {
//           collectArray.push(s)
//         }
//       }
//     }
//     return collectArray.length
// };

// // others Solutions
// var numJewelsInStones = function(jewels, stones) {
//     let jSet = new Set(jewels)
//     let sArray = stones.split("")
//     return sArray.reduce((count, item)=> {
//       return jSet.has(item) ? count + 1  : count
//     }, 0)
// };

// console.log(numJewelsInStones(jewels, stones));

// // 796. Rotate String

// let s = "abcde"
// let goal = "cdeab"

// var rotateString = function(s, goal) {
//   if (s.length !== goal.length) {
//     return false
//   }

//   for (let i = 0; i < s.length; i++) {
//     s = s.slice(1) + s[0]
//     if (s === goal) {
//       return true
//     }
//  }
//  return false
// };

// console.log(rotateString(s, goal));

