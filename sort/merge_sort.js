const arr = [9, 2, 3, 5, 4, 6, 7, 8]

function merge(arr1, arr2) {
  const mergedArr = []

  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      mergedArr.push(arr2[0])
      arr2.shift()
    } else {
      mergedArr.push(arr1[0])
      arr1.shift()
    }
  }

  return [...mergedArr, ...arr1, ...arr2]
}

function mergeSort(arr) {
  const mid = arr.length / 2
  const left = mid > 1 ? mergeSort(arr.slice(0, mid)) : [arr[0]]
  const right = mid > 1 ? mergeSort(arr.slice(mid)) : [arr[1]]

  return merge(left, right)
}

console.log(mergeSort(arr))
