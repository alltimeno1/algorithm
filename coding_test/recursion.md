```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/68935

// 재귀함수

function recursion(n) {
    
    const rest = n % 3
    
    if (n < 3) return '' + n
    
    n = (n - rest) / 3
    
    return recursion(n) + rest
}

function solution(n) {
    const result = recursion(n).split('').reduce((sum, val, idx) => sum + val * 3 ** idx, 0)
    
    return result
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12943

// while 활용

function solution(num) {
    let result = 0
    
    while (result < 500) {
        if (num === 1) {
            return result
        }   if (num % 2 === 0) {
            num = num / 2
        }   else if (num % 2) {
            num = num * 3 + 1
        }
        result++
    }
    
    return -1;
}

// 재귀 함수와 삼항 연산자

function solution(num, count = 0) {
    return num === 1 ? (count <= 500 ? count : -1) : solution(num % 2 ? num * 3 + 1 : num / 2, ++count)
}
```