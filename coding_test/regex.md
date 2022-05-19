```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/17682

// 정규식으로 점수, 보너스, 옵션 구분 후 계산

function solution(dartResult) {
    let answer = []
    let shot
    let arr = dartResult.match(/[0-9]{1,2}[SDT]{0,1}[*#]{0,1}/g)
    
    arr.forEach(e => {
        const score = /[0-9]{1,2}/g.exec(e)[0]
        const multi = /[SDT]/g.exec(e)[0]
        const special = /[*#]/g.exec(e) || []
        let shot = score ** (multi === 'S' ? 1 : multi === 'D' ? 2 : 3) 
        
        if (special[0] === '*') {
            if (answer[0]) answer[answer.length-1] *= 2
            shot *= 2
        } else if (special[0] === '#') {
            shot *= -1
        }
        
        answer.push(shot)        
    })
    
    return answer.reduce((a, b) => a + b, 0)
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    new_id = new_id
        .toLowerCase() // 1. 소문자로 치환
        .replace(/[^a-z0-9-_.]/g, '') // 2. 소문자, 숫자, -_. 제외 제거
        .replace(/\.+/g, '.') // 3. 연속된 마침표 제거
        .replace(/^\.|\.$/g, '') // 4. 맨 앞과 뒤 . 제거
        .replace(/^$/, 'a') // 5. 빈 문자열은 'a' 대입
        .match(/.{1,15}/)[0]
        .replace(/\.$/g, '') // 6. 15자 제한하고 마지막 마침표 제거
    
    while (new_id.length < 3) { // 7. 3글자가 될 때까지 마지막 문자를 끝에 계속 추가
        new_id += new_id.slice(-1)
    }    
    
    return new_id;
}
```

```Javascript
// https://programmers.co.kr/learn/courses/30/lessons/81301

// regex, replace

function solution(s) {
    const match = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    match.forEach((e, idx) => {
        const regex = new RegExp(e, 'g');
        
        s = s.replace(regex, idx);
    });
    
    return Number(s);
}
```