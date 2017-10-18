// import squareMap from './squareMap'
const squareMap = require('./squareMap')
for (let i = 0; i < 11; i++) {
  let line = ''
  for (let j = 0; j < 11; j++) {
    const p = 10 * i + j
    const cell = squareMap[p]
    if (cell.name) {
      name = (' ' + cell.name + '        ').substring(0, 11)
    }
    line += ` | ${name} | `
  }
  console.log(line)
}
