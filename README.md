# 📚 JavaScript Learning & Practice (260401-260403)

자바스크립트의 기초 문법부터 DOM 조작, 이벤트 핸들링까지 단계별로 학습한 내용을 기록하는 저장소입니다.

## 📂 학습 내용

### 1️⃣ 자바스크립트 기초 (Basic)
- **변수와 자료형**: `var`, `let`, `const`, `string`, `number`, `null`, `undefined` 등
- **연산자**: 산술 연산, 비교 연산, 논리 연산(`&&`, `||`, `!`)
- **제어문**: `if~else`, `for`, `while` 반복문 활용

### 2️⃣ 함수와 객체 (Functions & Objects)
- 함수의 정의와 호출, 매개변수와 반환값(return) 처리
- 객체(Object)의 구조와 속성 접근 방법

### 3️⃣ DOM 조작 및 이벤트 (DOM & Events)
- `document.querySelector`를 이용한 HTML 요소 선택
- `addEventListener`를 활용한 이벤트 바인딩
- **실습**: 마우스 오버(`mouseover`, `mouseout`) 시 요소의 스타일(색상) 변경 제어

### 4️⃣ 비동기 및 브라우저 API (Advanced)
- **LocalStorage**: 브라우저 내 데이터 영속성 관리 (`setItem`, `getItem`, `removeItem`)
- **JSON 활용**: 객체/배열의 직렬화(`stringify`) 및 역직렬화(`parse`)
- **Fetch API**: 외부 서버로부터 데이터를 받아오는 비동기 통신 기초
- **Timer**: `setTimeout`, `setInterval`을 이용한 시간 제어 및 지연 실행

---

## 🚀 Mini Projects
학습한 개념을 적용하여 제작한 소규모 애플리케이션입니다.

### ✅ To-Do List App (`todo.html`)
- **기능**: 할 일 추가/삭제, 목록 실시간 렌더링, 키보드 엔터 키 지원
- **핵심 기술**
  - **CRUD 기초**: `splice()` 메서드를 활용한 배열 요소 삭제 로직 구현
  - **데이터 동기화**: 변경된 배열 상태를 `localStorage`에 즉시 반영하여 데이터 무결성 유지
  - **UX 개선**: `keydown` 이벤트를 감지하여 엔터 키만으로 할 일 등록 가능
- **상태**: 주요 기능(추가, 삭제, 저장) 구현 완료

### 🍅 Pomodoro Timer (`pomodoro.html`)
- **기능**: 분 단위 시간 설정 및 카운트다운 타이머
- **핵심 기술**
  - `setInterval`을 이용한 1초 단위 시간 감소 로직
  - `Math.floor`와 나머지 연산자(`%`)를 활용한 분/초 계산
  - `String.padStart(2, "0")`를 이용한 시간 포맷팅 (00:00 형식)
- **상태**: 타이머 시작/중지 및 종료 알림 기능 구현 완료

---
*국비 교육과정 중 자바스크립트 역량 강화를 위해 작성되었습니다.*