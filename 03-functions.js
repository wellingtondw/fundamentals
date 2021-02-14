// pure function
function multiply(a, b) {
  return a * b
}

//composition and arrow function
const doubleValue = (value) => multiply(value, 2)

console.log(doubleValue(2))