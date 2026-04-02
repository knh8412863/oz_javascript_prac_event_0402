// 함수(Function) ; 코드 재사용을 위해 설계한 구조

// 함수 정의 -> "~ 기능을 하는 코드 덩어리"를 X라는 이름으로 부르겠다
function add(n1, n2) {
    let result = n1 + n2;
    return result;
}

// 함수 호출(call) -> 함수를 사용한다
console.log(add(1, 2));
