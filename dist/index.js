const Module = require('../build/demo.js')

console.log('[ Running ] ......................................')

Module.onRuntimeInitialized = () => {
  testFunction()
  testClass()
  testStruct()
  testVector()
}

const testFunction = () => {
  console.log('[ cpp funtion ] square:', Module.square(3))
  console.log('[ cpp funtion ] getChar:', Module.getChar())
  console.log('[ cpp funtion ] getString:', Module.getString())
}
const testClass = () => {
  let demo = new Module.Demo(4, 'test-demo')

  console.log('[ cpp class ] demo.dv: ', demo.dv)
  console.log('[ cpp class ] demo.value: ', demo.value)
  demo.redouble()
  console.log('[ cpp class ] demo.value: ', demo.value)
  // demo.value = 23  //error: value is readonly

  console.log('[ cpp class ] demo.name', demo.name)
  demo.name = 'hello js'
  console.log('[ cpp class ] demo.name', demo.name)
  demo.changeName('demo name...')
  console.log('[ cpp class ] demo.name', demo.name)
  demo.name[0] = 'c'
  console.log('[ cpp class ] 1111 demo.name', demo.name)

  demo.delete()
}
const testStruct = () => {
  console.log('[ cpp struct ]', Module.getStructObj(4, 'struct'))
  console.log('[ cpp struct ]', Module.getStructArr())
  console.log('[ cpp struct ]', Module.getStructComplex())
}
const testVector = () => {
  let arrayVector = Module.getArrayVector()
  console.log('[ cpp arrayVector ] vector', arrayVector)
  console.log('[ cpp arrayVector ] size', arrayVector.size())
  for (let i = 0; i < arrayVector.size(); i++) {
    console.log('[ cpp arrayVector ] item: ', arrayVector.get(i))
  }

  let structVector = Module.getStructVector()
  console.log('[ cpp structVector ] vector', structVector)
  console.log('[ cpp structVector ] size', structVector.size())
  for (let i = 0; i < structVector.size(); i++) {
    console.log('[ cpp structVector ] item: ', structVector.get(i))
  }

  let classVector = Module.getClassVector()
  console.log('[ cpp classVector ] vector', classVector)
  console.log('[ cpp classVector ] size', classVector.size())
  for (let i = 0; i < classVector.size(); i++) {
    let item = classVector.get(i)
    console.log('[ cpp classVector ] item: ', item, item.value, item.name)
  }
}
