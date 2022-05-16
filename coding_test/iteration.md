```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12935

// 반복문으로 가장 작은 값 구한 후 제거

function solution(arr) {
    if (arr.length <= 1) return [-1]
    
    let minVal = arr[0]
    let minIdx = 0
    
    arr.forEach((val, idx) => {
        if (val < minVal) {
            minVal = val
            minIdx = idx
        }
    })
    arr.splice(minIdx, 1)
    
    return arr
}


// Math.min, indexOf

function solution(arr) {
    if (arr.length <= 1) return [-1]
    
    const minVal = Math.min(...arr)
    
    const minIdx = arr.indexOf(minVal)
    
    arr.splice(minIdx, 1)
    
    return arr
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12916

// 반복문으로 각 문자 개수 비교

function solution(s) {
    let p_count = 0;
    let y_count = 0;
    
    const capital = s.toUpperCase()

    for (let i = 0; i < s.length; i++) {
        if (capital[i] === "P") {
            p_count += 1;
        } else if (capital[i] === "Y") {
            y_count += 1;
        }
    }
    
    const answer = p_count === y_count

    return answer;
}

// split 활용

function solution(s) {
     
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/42576

// 두 배열 정렬 후 차례대로 한개씩 비교

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
         
    }
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12950

// 2중 반복문

function solution(arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const inner = [];

        for (let j = 0; j < arr1[i].length; j++) {
            const sum = arr1[i][j] + arr2[i][j];
        
            inner.push(sum);
        }
        answer.push(inner);
    }
        
    return answer;
}

// map 함수

function solution(arr1, arr2) {
    const answer = arr1.map((val, idx) => val.map((val2, idx2) => val2 + arr2[idx][idx2]));
        
    return answer;
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12912

// 가우디 공식

function solution(a, b) {
    const answer = (a + b) * (Math.abs(b - a) + 1) / 2;
    return answer;
}

// 반복문

function solution(a, b) {
    let answer = 0;
    
    if (a < b) {
        for (let x = a; x <= b; x++) {
        answer += x
        }
    } else {
        for (let x = b; x <= a; x++) {
        answer += x
        }
    }
        
    return answer;
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/82612

// 가우디 공식

function solution(price, money, count) {
    
    const change = price * count * (count + 1) / 2 - money;
    
    const answer = change > 0 ? change : 0;
    
    return answer;
}

// 반복문

function solution(price, money, count) {
    let total = 0;
    
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    
    const change = total - money;    
    const answer = change > 0 ? change : 0;

    return answer;
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/12954

// 반복문

function solution(x, n) {
    const answer = [];
    
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    
    return answer;
}
```