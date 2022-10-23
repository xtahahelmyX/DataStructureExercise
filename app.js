const arrOne = [3, 1, 7, 9]
const arrTwo = [2, 4, 1, 9, 3]
const arrThree = [12, 13, 6, 10]
const arrFour = [13, 10, 16, 15]

const sumDistinct = (setOne, setTwo) => {
  let sum = 0

  setOne.forEach(item => {
    if(!setTwo.includes(item)) {
      sum += item;
    }
  })
  
  setTwo.forEach(item => {
    if(!setOne.includes(item)) {
      sum += item;
    }
  })
  
  return sum;
}
console.log(sumDistinct(arrOne, arrTwo))

const sumDistinctHashMap = (setOne, setTwo) => {
  const hashmap = new Map()
  let sum = 0

  setOne.forEach(item => {
    if(hashmap.has(item)) {
      hashmap.set(item, hashmap.get(item) + 1)
    }else {
      hashmap.set(item, 1)
    }
  })

  setTwo.forEach(item => {
    if(hashmap.has(item)) {
      hashmap.set(item, hashmap.get(item) + 1)
    }else {
      hashmap.set(item, 1)
    }
  })

  for(let item of hashmap.keys()) {
    if(hashmap.get(item) === 1) {
      sum += item;
    }
  }
  return sum
}

console.log(sumDistinctHashMap(arrOne, arrTwo))

const sumOverlap = (setOne, setTwo) => {
  let sum = 0

  for(let i = 0; i < setOne.length; i++) {
    if(setTwo.includes(setOne[i])) {
      sum += setOne[i];
    }
  }

  for(let i = 0; i < setTwo.length; i++) {
    if(setOne.includes(setTwo[i])) {
      sum += setTwo[i];
    }
  }
  return sum
}

console.log(sumOverlap(arrThree, arrFour))

const sumDistinctHash = (setOne, setTwo) => {
  const hashmap = {}
  let sum = 0

  setOne.forEach(item => {

    if(item in hashmap) {
      hashmap[item] = hashmap[item] + 1
    }else {
      hashmap[item] = 1
    }
  })

  setTwo.forEach(item => {
    if(item in hashmap) {
      hashmap[item] = hashmap[item] + 1
    }else {
      hashmap[item] = 1
    }
  })

  Object.keys(hashmap).forEach(item => {
    hashmap[item] === 1 ? sum += Number(item) : null
  })

  return sum
}
console.log(sumDistinctHash(arrOne, arrTwo))