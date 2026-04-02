// 함수를 값처럼 다루기
// 1) 함수를 변수에 할당 가능

// 함수 정의
function sayHello() {
    console.log("Hello");
};

// 함수 호출
sayHello();

// 함수
sayHello

// 1) 함수를 변수에 할당 가능
const f = sayHello;

// 2) 함수를 다른 함수의 인자로 전달 가능
function run(fn) {
    console.log("start function run...")
    fn();
    console.log("end function run...")
}

run(sayHello);

// (기본) 함수를 선언한 곳에서 직접 호출
// (응용) 함수를 선언한 곳과 호출하는 곳이 달라질 수 있음
