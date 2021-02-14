//High Order Function
const sum = (a, b) => a + b
const multiply = (a, b) => a * b

const calc = (op, a, b) => op(a, b)

const sumResult = calc(sum, 2, 4)
const multResult = calc(multiply, 2, 4)

console.log(sumResult, multResult)

//-------------------------------------------

const selectOp = op => {
  const ops = {
    '+': sum,
    '*': multiply
  }

  return ops[op]
}

const compositeHofResult = calc(selectOp('*'), 2, 2)

console.log(compositeHofResult)

//-------------------------------------------

