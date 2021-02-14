const int = 10
const float = 10.10
const str = 'Hello World'

const obj = {
  name: 'Wellington',
  address: {
    city: 'Paracambi',
    UF: 'RJ'
  }
}

const arr = [1, 2, 3]

// functions: first-class citizens
const toInt = parseInt
console.log(toInt('10') + 1)