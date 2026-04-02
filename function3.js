// 지금까지 배운 JS 문법(조건문, 반복문, 함수 등)을 활용하는 실습

function getAverage(scores) {
    let sum = 0

    for (const score of scores) {
        sum += score;
    };
    avg = sum / scores.length
    return avg
};

const scores = [80, 85, 92, 97];
const average = getAverage(scores)
console.log(average);