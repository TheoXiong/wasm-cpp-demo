const Module = require('../build/demo.js')

console.log('[ Running ] ......................................')

Module.onRuntimeInitialized = () => {
  console.log()

  testFunction()
  testClass()
  testStruct()
  testVector()
}

const testFunction = () => {
  console.log('[ cpp funtion ] square:', Module.square(3))
  console.log('[ cpp funtion ] getChar:', Module.getChar())
  console.log('[ cpp funtion ] getString:', Module.getString())
  console.log()
}
const testClass = () => {
  let demo = new Module.Demo(4, 'test-demo')
  console.log('[ cpp class ] demo.value: ', demo.value)
  demo.redouble()
  console.log('[ cpp class ] demo.value: ', demo.value)
  // demo.value = 23  //error: value is readonly

  console.log('[ cpp class ] demo.name', demo.name)
  demo.name = 'hello js'
  console.log('[ cpp class ] demo.name', demo.name)
  demo.changeName('new-name...')
  console.log('[ cpp class ] demo.name', demo.name)

  demo.delete()
  console.log()
}
const testStruct = () => {
  console.log('[ cpp struct ][ getStructObj ]', Module.getStructObj(4, 'struct'))
  console.log('[ cpp struct ][ getStructArr ]', Module.getStructArr([9, '-input-b', '-input-c', '-input-d']))
  console.log('[ cpp struct ][ getStructComplex ]', Module.getStructComplex())
  console.log()
}
const testVector = () => {
  let data = [[1, '1', '2', '3'], [2, '22', '23', '24'], [3, '33', '34', '35']]
  let input = new Module.StructArrVector()
  data.forEach(d => { input.push_back(d) })
  let arrayVector = Module.getArrayVector(input)
  for (let i = 0; i < arrayVector.size(); i++) {
    console.log(`[ cpp arrayVector ] item ${i}: `, arrayVector.get(i))
  }
  console.log()

  let structVector = Module.getStructVector()
  console.log('[ cpp structVector ] size', structVector.size())
  for (let i = 0; i < structVector.size(); i++) {
    console.log(`[ cpp structVector ] item ${i}: `, structVector.get(i))
  }
  console.log()

  let classVector = Module.getClassVector()
  console.log('[ cpp classVector ] size', classVector.size())
  for (let i = 0; i < classVector.size(); i++) {
    let item = classVector.get(i)
    console.log(`[ cpp classVector ] item ${i}: `, item, item.value, item.name)
  }
  console.log()
}
