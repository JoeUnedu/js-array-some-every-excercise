/*
Write a function called hasOddNumber which accepts an
 array and returns true if the array contains at least one 
 odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
  let hasSomeOddHolder = arr.some(function (hasSomeOdd) {
    if (hasSomeOdd % 2 === 1) {
      return true;
    }
    return false;
  });
  return hasSomeOddHolder;
}
let hasOddNumberHolder = hasOddNumber([1, 2, 2, 2, 2, 2, 4]);
console.log(`had some odd number :`, hasOddNumberHolder);

/* 
Write a function called hasAZero which accepts a number and returns
 true if that number contains at least one zero. Otherwise,
  the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
  let numToString = num.toString(); // or use (num + "")
  let hasZeroHolder = numToString.split("").some((hasZero) => {
    if (hasZero === "0") {
      return true;
    } else {
      return false;
    }
  });

  return hasZeroHolder;
}
let hasAZeroHolder = hasAZero(1212121);
console.log(`has A zero:`, hasAZeroHolder);
/*
Write a function called hasOnlyOddNumbers which accepts an array
 and returns true if every single number in the array is odd. 
 If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
  let oddNumbersHolder = arr.every(function (oddNumbers) {
    return oddNumbers % 2 === 1;
  });
  return oddNumbersHolder;
}
let hasOnlyOddNumbersHolder = hasOnlyOddNumbers([1, 3, 5, 7]);
console.log(`has only odd numbers:`, hasOnlyOddNumbersHolder);
/*
Write a function called hasNoDuplicates which accepts an
 array and returns true if there are no duplicate values 
 (more than one element in the array that has the same value as another).
  If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
  let newArr = [...new Set(arr)];
  if (newArr.length === arr.length) {
    return true;
  }
  return false;

  /*
  let valHolder = arr.every(function (arrVal, arrIdx, arr) {
    for (let i = arrIdx + 1; i < arr.length; i++) {
      if (arrVal === arr[i]) {
        return false;
      }
    }
    return true;
  });
  return valHolder;
*/
}
let hasNoDuplicatesHolder = hasNoDuplicates([1, 2, 3, 1]);
console.log(` has no duplicates:`, hasNoDuplicatesHolder);

/*
Write a function called hasCertainKey which accepts an array
 of objects and a key, and returns true if every single object in the array 
 contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
  let objHolder = arr.every(function (obj) {
    if (obj[key] !== undefined) {
      return true;
    } else {
      return false;
    }
  });
  return objHolder;
}
let hasCertainKeyHolder = hasCertainKey(
  [
    { title: "Instructor", first: "Elie", last: "Schoppik" },
    { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: "Matt", last: "Lane" },
    { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "first"
);
console.log(` has certian key:`, hasCertainKeyHolder);
/*
Write a function called hasCertainValue which accepts an
 array of objects and a key, and a value, and returns true if every
  single object in the array contains that value for the specific key. 
  Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
  let objHolder = arr.every(function (obj) {
    return obj[key] === searchValue;
  });
  return objHolder;
}
let hasCertainValueHolder = hasCertainValue(
  [
    { title: "Instructor", first: "Elie", last: "Schoppik" },
    { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: "Matt", last: "Lane" },
    { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "title",
  "Instructor"
);
console.log(` has certian values:`, hasCertainValueHolder);
