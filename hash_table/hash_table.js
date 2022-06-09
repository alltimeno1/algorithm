const hashTableSize = 23
const hashTable = []

const hashFunction = (value) => value % hashTableSize
const hashFunction2 = (value) => 17 - (value % 17)

function setHash(value) {
  let index = hashFunction(value)
  let initValue = hashTable[index]

  while (true) {
    if (!initValue) {
      hashTable[index] = value
      console.log(`${index}번 인덱스에 ${value} 저장`)
      return
    } else if (hashTable.filter((e) => e).length === hashTableSize) {
      console.log('배열에 할당된 모든 메모리 공간 사용 중')
      return
    } else {
      console.log(`${index}번 인덱스에 이미 저장된 데이터 존재`)
      index += hashFunction2(value)
      index = index > hashTableSize ? index - hashTableSize : index
      initValue = hashTable[index]
    }
  }
}

setHash(10)
setHash(33)
setHash(56)
setHash(10)

console.log(hashTable)
