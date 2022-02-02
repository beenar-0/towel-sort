
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0) return []
        let temp = []
        let rez = []
        matrix.forEach((item, index)=>{
            if (index % 2 !== 0) {
                temp.push(item.reverse())
            } else temp.push(item)
        })
        temp.forEach((item)=>{
            rez = rez.concat(item)
        })
  return rez
}
