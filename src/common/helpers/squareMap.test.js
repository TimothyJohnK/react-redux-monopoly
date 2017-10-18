// import squareMap from './squareMap'
const squareMap = require('./squareMap2')
let line = []
for (let i = 0; i < 13; i++) {
  for (let j = 0; j < 10; j++) {
    const p = 10 * i + j
    const cell = squareMap[p]
    let name
    if (cell && cell.name) {
      name = (' ' + cell.name + '        ').substring(0, 11)
    } else {
      name = '   blank   '
    }
    line.push(` |${name}| `)
    if (line.length === 11) {
      console.log(line.join(''))
      line = []
    }
  }
}
