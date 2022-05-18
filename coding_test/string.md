```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12926

// ascii 코드로 변환 -> 25만큼 이동 -> 문자열로 변환

function solution(s, n) {
    const result = s.split('').map(e => {
        let ascii = e.charCodeAt(0);
        
        if (ascii > 64 && ascii < 91) {
            ascii = ascii + n > 90 ? ascii + n - 26 : ascii + n
        } else if (ascii > 96 && ascii < 123) {
            ascii = ascii + n > 122 ? ascii + n - 26 : ascii + n
        }
        
        return String.fromCharCode(ascii)
    }).join('');
    
    return result;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12915

// split, sort, join

function solution(strings, n) {
    strings = strings.map(e => [e.slice(0, n), e.slice(n)])
    
    const result = strings
        .sort((a, b) => {
            if (b[1][0] === a[1][0]) {
                return b.join('') > a.join('') ? -1 : 1
            } else {
                return b[1][0] > a[1][0] ? -1 : 1
            }
        })
        .map(e => e.join(''))
    
    return result
}

// sort

function solution(strings, n) {
    strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a > b ? 1 : -1
        } else {
            return a[n] > b[n] ? 1 : -1
        }
    })
    
    return strings
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12917

// split -> sort -> join

function solution(s) {
    const answer = s.split('').sort((a, b) => b > a ? 1 : -1).join('');
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12933

// Number -> String -> Array

function solution(n) {
    const answer = Number(n.toString().split('').sort((a, b) => b - a).join(''));
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12932

// Number -> String -> Array

function solution(n) {
    let answer = [];
          
    n.toString().split('').forEach(e => answer.unshift(Number(e)))
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12948

// 뒤에 4자리 제외 길이만큼 * 추가 + 뒤에 4자리

function solution(phone_number) {
    const answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12931

// 문자열로 변환 후 더하기

function solution(n) {
    let answer = 0;
    let str = n.toString()
    
    for (let i = 0; i < str.length; i++) {
        answer += Number(str[i])
    }

    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12925

// parseInt : 문자열을 정수로 변환

function solution(s) {
    const answer = Number(s);
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12903

// substr : 문자열 자르기

function solution(s) {
    const len = s.length
    
    if (len % 2) {
        return s.substr((len - 1) / 2, 1)
    } else {
        return s.substr(len / 2 - 1, 2)
    }
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12969


// repeat : 문자열 반복

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let n = 0; n < b; n++) {
        console.log('*'.repeat(a));
    }
});
```
