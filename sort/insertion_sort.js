const arr = [4, 6, 2, 9, 1]

for (let i = 1; i < arr.length; i++) {
  for (let n = i - 1; n >= 0; n--) {
    const num = arr[n + 1]

    if (arr[n] < num) {
      break
    }

    arr[n + 1] = arr[n]
    arr[n] = num
  }
}

console.log(arr)
