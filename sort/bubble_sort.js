const arr = [4, 6, 2, 9, 1]
let len = arr.length - 1
let count

do {
  count = 0

  for (let i = 0; i < len; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
      count++
    }
  }
  len--
} while (count)

console.log(arr)
