```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12977

// 3중 for문으로 모든 경우의 수 배열 구함 -> 2 ~ 루트 근사값으로 소수 필터링

function solution(nums) {
    let sumArr = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let n = i + 1; n < nums.length - 1; n++) {
            for (let m = n + 1; m < nums.length; m++) {
                sumArr.push(nums[i] + nums[n] + nums[m]);
            }
        }
    }
        
    const answer = sumArr
        .filter(e => {
            for (let i = 2; i <= Math.floor(Math.sqrt(e)); i++) {
                if (e % i === 0) return false
            }
            return true
        })
        .length;
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/77484

// filter

function solution(lottos, win_nums) {
    const min = lottos.filter(e => e && win_nums.includes(e)).length
    const max = min + lottos.filter(e => e === 0).length
    
    const minRank = min < 2 ? 6 : 7 - min
    const maxRank = max < 2 ? 6 : 7 - max
    
    const answer = [maxRank, minRank]
    
    return answer;
}

// for문 

function solution(lottos, win_nums) {
    let sameNums = 0
    let zeros = 0
    
    for (num of lottos) {
        if (!num) {
            zeros += 1
        } else if (num && win_nums.includes(num)) {
            sameNums += 1
        }
    }
    
    const minRank = sameNums >= 2 ? 7 - sameNums : 6
    const maxRank = sameNums + zeros >= 2 ? 7 - sameNums - zeros : 6
    
    const answer = [maxRank, minRank];
    return answer;
}
```

```JavaScript
// https://programmers.co.kr/learn/courses/30/lessons/68644

// 2중 반복문 n(n - 1), Set 객체로 중복값 제거, sort로 정렬

function solution(numbers) {
    let answer = [];
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let n = i + 1; n < numbers.length; n++) {
            answer.push(numbers[i] + numbers[n])
        }
    }
    
    answer = [...new Set(answer)].sort((a, b) => a - b)
                
    return answer;
}
```

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