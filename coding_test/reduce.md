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