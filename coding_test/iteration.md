```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/17681

// 10진법 -> 2진법 -> #

function solution(n, arr1, arr2) {
    let result = []
        
    arr1.forEach((e, i) => {
        let blocks = ''
        const binary1 = e.toString(2).padStart(n)
        const binary2 = arr2[i].toString(2).padStart(n)
        
        for (let k = 0; k < n; k++) {
            blocks += Number(binary1[k]) + Number(binary2[k]) ? '#' : ' '
        }
        
        result.push(blocks)
    })
    
    return result
}

// 10진법 -> 2진법 -> #

function solution(n, arr1, arr2) {
    let result = []
    
    arr1 = arr1.map(e => e.toString(2).padStart(n))
    arr2 = arr2.map(e => e.toString(2).padStart(n))
    
    for (let i = 0; i < n; i++) {
        let blocks = ''
        
        for (let k = 0; k < n; k++) {
            blocks += Number(arr1[i][k]) + Number(arr2[i][k]) ? '#' : ' '
        }
        
        result.push(blocks)
    }
    
    return result
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12921

// for, every => 효율성 나쁨 

function solution(n) {
    let answer = [2];
    
    for (let i = 3; i <= n; i += 2) {      
        const prime = answer.every(e => i % e);
        
        if (prime) answer.push(i);
    }
    
    return answer.length;
}

// 에라토스테네스의 체 => 엄청 빠름

function solution(n) {
    const prime = []
    
    for (let i = 1; i < n; i++) {      
        prime.push(true)
    }
    
    for (let i = 2; i * 2 <= n; i++) {
        if (prime[i - 2]) {
            for (let m = 2; m * i <= n; m++) {
                prime[i * m - 2] = false
            }
        }
    }
    
    const result = prime.filter(e => e).length
    
    return result
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/42889

// 실패율 : N번 개수 / N번 이상 개수, 스테이지 번호와 실패율을 2차원 배열로 구성

function solution(N, stages) {
    let rate = []
    
    for (let i = 1; i <= N; i++) {
        rate.push([i, stages.filter(e => e === i).length / stages.filter(e => e >= i).length])
    }
    
    const answer = rate.sort((a, b) => b[1] - a[1]).map(e => e[0])
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/42748

// 배열을 길이만큼 자르고 정렬하고 나온 k번째 수로 배열을 반환

function solution(array, commands) {
    const answer = commands.map(e => array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1])
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12940

// 반복문

function solution(n, m) {
    const [l, s] = n > m ? [n, m] : [m, n];
    
    for (let i = s; i > 0; i--) {
        if (!(l % i || s % i)) {
            return [i, l * s / i];
        }
    }
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/12928

// 1부터 루트값까지 돌면서 약수 더하기

function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        answer += n % i ? 0 : n === i ** 2 ? i : i + n / i
    }
    
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/87389

// 반복문으로 2부터 나머지가 1이 되는 값 탐색

function solution(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) return i
    }
}
```

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
// https://programmers.co.kr/learn/courses/30/lessons/12982

// 반복문

function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let answer = 0;
    
    for (let i = 0; i < d.length; i++) {
        const sum = d[i] + answer;
        
        if (sum > budget) {
            return i;
        } else if (sum === budget) {
            return i + 1;
        } else {
            if (i === d.length - 1) return i + 1
            
            answer = sum;
        }
    }
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