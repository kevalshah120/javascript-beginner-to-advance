// diff between substr and slice in js string methods


// Negative Indices: Unlike substring(), slice() allows negative indices. A negative index counts from the end of the string.

// For example, -1 refers to the last character, -2 refers to the second last, and so on.

// If startIndex is negative, it is treated as startIndex = string.length + startIndex.

// If startIndex is greater than endIndex, the method returns an empty string.

//in substr If startIndex > endIndex, the order is swapped automatically.

// in substr If startIndex is negative, it starts from the end of the string (counting backward).

// the indexof method in string returns the first index of occurence of the string or character passed as an argument to this method and if that is not present then it returns -1

// replace take 2 arguments first the string to be replaced and second the string to which it should be replaced with if string that we want to replace is not present then it will do nothing it will keep the string as it is and also

// if multiple occurence of string that needs to be replace is present then it will only replace the first occurence

// if we want to repace for all occurences then use replaceall

let str = "JavaScript";

// Negative startIndex: start from the 3rd last character
console.log(str.substr(-4,4));  // Output: "ipt"
