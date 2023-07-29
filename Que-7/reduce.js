const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, curr) => {
  acc.push(curr);
  return acc;
}, []);

reversedArr.reverse();

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
