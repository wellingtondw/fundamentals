// Asynchronism
const fs = require('fs')

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, content) => {
    if(!err) {
      resolve(content)
    }else {
      reject(err)
    }
  })
})

// with then
readFile('04-hof.js')
  .then(content => console.log(content.toString()))

//with async - await
const run = async() => {
  const content = await readFile('04-hof.js')

  console.log(content.toString())
}
run()