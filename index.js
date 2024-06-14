const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const rounds = document.querySelector("#rounds");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

btn1.addEventListener('click', (e) => {
    if (parseInt(score1.innerText) != parseInt(rounds.value)) {
        let score = parseInt(score1.innerText) + 1;
        score1.innerText = score;
        if (parseInt(score1.innerText) === parseInt(rounds.value)) {
            score1.style.color = 'green';
            score2.style.color = 'red';
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
});

btn2.addEventListener('click', (e) => {
    if (parseInt(score2.innerText) != parseInt(rounds.value)) {
        let score = parseInt(score2.innerText) + 1;
        score2.innerText = score;
        if (parseInt(score2.innerText) === parseInt(rounds.value)) {
            score2.style.color = 'green';
            score1.style.color = 'red';
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
});

btn3.addEventListener('click', (e) => {
    score2.style.color = 'black';
    score1.style.color = 'black';
    score1.innerText = '0';
    score2.innerText = '0';
    btn1.disabled = false;
    btn2.disabled = false;
});

rounds.addEventListener('change', () => {
    btn3.click();
});
