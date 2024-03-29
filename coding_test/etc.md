```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/64061

// findIndex로 뽑아야 될 인형 높이 찾기

function solution(board, moves) {
    let bucket = []
    let answer = 0
    
    for (move of moves) {
        const idx = board.findIndex(c => c[move - 1])
        
        if (idx === -1) continue
        
        const pickedToy = board[idx][move - 1]
        
        board[idx][move - 1] = 0
        
        if (bucket[bucket.length - 1] === pickedToy) {
            answer += 2
            bucket.pop()
        } else {
            bucket.push(pickedToy)
        }
    }
    return answer;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/67256#

// 다양한 경우의 수를 if문으로 작성

function solution(numbers, hand) {
    const middleNum = [2, 5, 8, 11]
    let left = 10
    let right = 12
    let leftDist
    let rightDist
    let result = ''
    
    for (num of numbers) {
        if (!num) num = 11
        
        if (num % 3 === 1) {
            result += 'L'
            left = num
        } else if (num % 3 === 0) {
            result += 'R'
            right = num
        } else {
            const numIdx = middleNum.indexOf(num)
            
            leftDist = Math.abs(numIdx - middleNum.indexOf(left + 2 - left % 3)) + 2 - left % 3
            rightDist = Math.abs(numIdx - middleNum.indexOf(right - (right + 1) % 3)) + (right + 1) % 3
            
            if (leftDist > rightDist) {
                right = num
                result += 'R'
            } else if (leftDist < rightDist) {
                left = num
                result += 'L'
            } else {
                if (hand === 'right') {
                    result += 'R'
                    right = num
                } else {
                    result += 'L'
                    left = num
                }
            }            
        }
    }
    
    return result;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/1845

// 삼항연산자

function solution(nums) {
    const cat = new Set(nums).size
    let len = nums.length / 2
    
    return cat > len ? len : cat
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/77884

// 정수의 제곱값은 약수가 홀수, 나머지는 짝수

function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
    }
    
    return answer;
}
```

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
// Date

function hanghae99(month, day) {
  let firstDay = new Date(`2022-${month}-${day} 09:00:00`)

  firstDay.setDate(firstDay.getDate() + 98)

  console.log(`${firstDay.getMonth() + 1}월 ${firstDay.getDate()}일`)
}

hanghae99(11, 27)
hanghae99(6, 22)
hanghae99(1, 18)
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