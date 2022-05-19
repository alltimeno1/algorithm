```Javascript
// 주어진 배열을 합 혹은 곱셈(순차 진행)으로 최대값 구하기

// 총계와 현재값이 1보다 크면 곱셈, 아니면 덧셈

const input = [0, 3, 5, 6, 1, 2, 4]

function findMaxPlusOrMultiply(array) {
  const answer = array.reduce((pre, cur) => pre > 1 && cur > 1 ? pre * cur : pre + cur, 0)

  return answer
}

const result = findMaxPlusOrMultiply(input)

console.log(result)
```


```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12947

// 숫자 -> 문자열 -> 배열 -> 합계

function solution(x) {
    const sum = String(x).split('').reduce((sum, val) => sum + Number(val), 0)
    
    const answer = x % sum === 0
        
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/86051

// reduce : array.reduce(callback, initialValue)

function solution(numbers) {
    const answer = 45 - numbers.reduce((sum, val) => sum + val, 0);
    
    return answer;
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12901

// 

function solution(arr) {
    const answer = arr.reduce((sum, val) => sum + val, 0) / arr.length;
        
    return answer;
}
```

```JavaScript
//https://programmers.co.kr/learn/courses/30/lessons/76501

// 콜백 함수 인덱스 활용

function solution(absolutes, signs) {
    const answer = absolutes.reduce((sum, val, idx) => signs[idx] ? sum + val : sum - val, 0);
    
    return answer;
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12901

// 날짜를 일수로 변경 후 요일 계산

function solution(a, b) {
    const week = ['THU','FRI','SAT', 'SUN','MON','TUE','WED'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = month.slice(0, a - 1).reduce((sum, val) => sum + val, 0) + b;
    
    const answer = week[days % 7]
    
    return answer;
}
```