const arr = [4, 6, 2, 9, 1]

for (let i = 0; i < arr.length; i++) {
  let min = i

  for (let n = i; n < arr.length; n++) {
    min = arr[n] < arr[min] ? n : min
  }

  const temp = arr[i]

  arr[i] = arr[min]
  arr[min] = temp
}

console.log(arr)
