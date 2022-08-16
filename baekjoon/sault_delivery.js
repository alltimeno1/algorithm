function calcMinBag(input) {
  let max = parseInt(input / 5)

  while (max >= 0) {
    const rest = input - 5 * max
    if (!(rest % 3)) {
      console.log(max + parseInt(rest / 3))
      return
    }
    max--
  }
  console.log(-1)
}

calcMinBag(17)
