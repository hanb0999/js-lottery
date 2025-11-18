const TICKET_COUNT = 10000;

const YEARS = 1;

const PROBABILITY = 2000 * 10000;

const button = document.getElementById("buy-button");
const years = document.getElementById("years");
const amount = document.getElementById("amount");
const message = document.getElementById("message");

let count = 0;
let hitCount = 0;

button.onclick = function() {
    count++;
    let beforeHit = hitCount;

    for (let i = 0; i < YEARS * TICKET_COUNT; i++) {
        const randNum = Math.floor(Math.random() * PROBABILITY);
        if (randNum === 29) {
            hitCount++;
        }
    }

    // hitCount++;

    years.textContent = count
    amount.textContent = hitCount * 10

    console.log("購入完了")

    if (hitCount > beforeHit) {
        message.textContent = "🎉 当たり！おめでとう！ 🎉";
        message.style.color = "gold";
    } else {
        message.textContent = "残念…また挑戦してみよう！";
        message.style.color = "#666";
    }
}


