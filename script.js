let energyAmount = 1000;
let balanceAmount = 0;
let incomeMultiplier = 1; // Коэффициент заработка

document.getElementById('energy-amount').innerHTML = energyAmount;
document.getElementById('balance-amount').innerHTML = balanceAmount;

setInterval(() => {
    energyAmount += 10;
    if (energyAmount > 1000) {
        energyAmount = 1000;
    }
    document.getElementById('energy-amount').innerHTML = energyAmount;
}, 1000);

document.querySelector('.coin-image').addEventListener('click', () => {
    if (energyAmount > 0) {
        balanceAmount += incomeMultiplier;
        energyAmount--;
        document.getElementById('balance-amount').innerHTML = balanceAmount;
        document.getElementById('energy-amount').innerHTML = energyAmount;
    }
});

document.getElementById('ads-button').addEventListener('click', () => {
    document.querySelector('.energy-section').style.display = 'none';
    document.querySelector('.balance-section').style.display = 'none';
    document.querySelector('.ads-section').style.display = 'block';
});

document.querySelectorAll('.buy-button').forEach((button) => {
    button.addEventListener('click', (event) => {
        let cost = parseInt(event.target.parentNode.querySelector('p').textContent.match(/\d+/)[0]);
        if (balanceAmount >= cost) {
            balanceAmount -= cost;
            incomeMultiplier += 0.1; // Увеличиваем коэффициент заработка
            document.getElementById('balance-amount').innerHTML = balanceAmount;
            alert(`Вы купили улучшение заработка на ${cost} монет!`);
        } else {
            alert('У вас недостаточно монет для покупки!');
        }
    });
});

document.getElementById('main-button').addEventListener('click', () => {
    document.querySelector('.energy-section').style.display = 'block';
    document.querySelector('.balance-section').style.display = 'block';
    document.querySelector('.ads-section').style.display = 'none';
});