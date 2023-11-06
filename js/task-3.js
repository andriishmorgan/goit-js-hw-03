function filterArray(numbers, value) {

    const filteredArray = [];
    
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] > value)
        {
            filteredArray.push(numbers[i]);
        }
    }

    return filteredArray;
}

console.log(filterArray([12, 24, 8, 41, 76], 20));