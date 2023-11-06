function makeArray(firstArray, secondArray, maxLength) {
    const togetherArray = firstArray.concat(secondArray);
    if (togetherArray.length > maxLength) {
        return togetherArray.slice(0, maxLength);
    } else {
        return togetherArray;
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));