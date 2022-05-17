```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/42840

// filter, map

function solution(answers) {
    const one = [1, 2, 3, 4, 5]
    const two = [2, 1, 2, 3, 2, 4, 2, 5]
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const score = []
    
    for (let std of [one, two, three]) {
        score.push(answers.filter((e, idx) => e === std[idx % std.length]).length);
    }
    
    const result = score
        .map((e, idx) => e === Math.max(...score) ? idx + 1 : 0)
        .filter(e => e)
    
    
    return result;
}
```


```Javascript
// 각 요소가 이전값(previousVal)과 다르면 answer 배열에 넣음

function solution(arr) {
    let answer = [];
    let previousVal;
    
    arr.forEach(e => {
        if (e !== previousVal) {
            answer.push(e);
            previousVal = e
        }
    })
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/86491

// 명함에서 큰 길이 & 작은 길이 중 각각 가장 큰 값 곱해줌

function solution(sizes) {
    let wallet = [0, 0]
    
    sizes.forEach(e => {
        const big = e[0] > e[1] ? e[0] : e[1]
        const small = e[0] > e[1] ? e[1] : e[0]
        
        wallet[0] = big > wallet[0] ? big : wallet[0]
        wallet[1] = small > wallet[1] ? small : wallet[1]
    })
    
    const answer = wallet[0] * wallet[1]
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12934

// parseInt

function solution(n) {
    const root = Math.sqrt(n)
    
    const answer = root === parseInt(root) ? (root + 1) ** 2 : -1;
    
    return answer;
}

// isInteger

function solution(n) {
    const root = Math.sqrt(n)
    
    const answer = Number.isInteger(root) ? (root + 1) ** 2 : -1;
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12930

// 문자열을 배열로 변환 후 대소문자 변경

function solution(s) {
    const array = s.split(' ');
    
    const answer = array.map(e => e.split('')
                                   .map((a, idx) => idx % 2 ? a.toLowerCase() : a.toUpperCase())
                                   .join(''))
                        .join(' ');
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12922

// 반복문과 삼항 연산자 활용

function solution(n) {
    let answer = '';
    
    for (let i = 0; i < n; i++) {
        answer += i % 2 ? '박' : '수';
    }
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12919

// indexOf

function solution(seoul) {
    const answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12918

// 문자열을 배열로 변환 후 every 함수 활용

function solution(s) {
    const onlyNumber = s.split('').every(e => Number(e) + 1);
    
    const rightLength = s.length === 4 || s.length === 6;
    
    const answer = onlyNumber && rightLength;
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12910

// filter와 sort 활용

function solution(arr, divisor) {
    const divided = arr.filter(e => e % divisor === 0);

    const answer = divided.length ? divided.sort((a, b) => a - b) : [-1];
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/70128

// forEach 활용

function solution(a, b) {
    let answer = 0;
    
    a.forEach((e, idx) => answer += e * b[idx]);
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12937

// 삼항 연산자

function solution(num) {
    const answer = num % 2 ? "Odd" : "Even";
          
    return answer;
}
```