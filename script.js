let balance = localStorage.getItem('balance') ? parseInt(localStorage.getItem('balance')) : 0;
let level = localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 1;
let perClickCoins = 1 + (level - 1);
let dailyLimit = localStorage.getItem('dailyLimit') ? parseInt(localStorage.getItem('dailyLimit')) : 1000;
let earnedToday = 0;
let rewardClaimed = localStorage.getItem('rewardClaimed') === 'true';

document.getElementById('balance').textContent = balance;
document.getElementById('level').textContent = level;
document.getElementById('limit').textContent = dailyLimit;
document.getElementById('upgrade-cost').textContent = level * 500;
document.getElementById('limit-cost').textContent = dailyLimit * 1.5;

document.getElementById('coin').addEventListener('click', function() {
    if (earnedToday < dailyLimit) {
        balance += perClickCoins;
        earnedToday += perClickCoins;
        document.getElementById('balance').textContent = balance;
        localStorage.setItem('balance', balance);
    } else {
        alert("Daily limit reached!");
    }
});

// Task button to open modal
document.getElementById('tasks').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = "block";
});

// Boost button to open modal
document.getElementById('boost').addEventListener('click', function() {
    document.getElementById('boost-modal').style.display = "block";
});

// Withdrawal button
document.getElementById('withdrawal').addEventListener('click', function() {
    alert("Coin listed on October 25, 2024");
});

// Close modals
let modals = document.getElementsByClassName('close');
for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}

// Claim reward for joining channel
document.getElementById('claim-reward').addEventListener('click', function() {
    if (!rewardClaimed) {
        balance += 1000;
        rewardClaimed = true;
        document.getElementById('balance').textContent = balance;
        localStorage.setItem('balance', balance);
        localStorage.setItem('rewardClaimed', true);
        document.getElementById('task-modal').style.display = "none";
        alert("1000 coins added for joining the channel!");
    } else {
        alert("You have already claimed the reward!");
    }
});

// Upgrade level
document.getElementById('upgrade').addEventListener('click', function() {
    let upgradeCost = level * 500;
    if (balance >= upgradeCost) {
        balance -= upgradeCost;
        level++;
        perClickCoins++;
        document.getElementById('balance').textContent = balance;
        document.getElementById('level').textContent = level;
        document.getElementById('upgrade-cost').textContent = level * 500;
        localStorage.setItem('balance', balance);
        localStorage.setItem('level', level);
        alert("Level upgraded!");
    } else {
        alert("Not enough coins to upgrade!");
    }
});

// Upgrade daily limit
document.getElementById('upgrade-limit').addEventListener('click', function() {
    let limitUpgradeCost = dailyLimit * 1.5;
    if (balance >= limitUpgradeCost) {
        balance -= limitUpgradeCost;
        dailyLimit += 1000;
        document.getElementById('balance').textContent = balance;
        document.getElementById('limit').textContent = dailyLimit;
        document.getElementById('limit-cost').textContent = dailyLimit * 1.5;
        localStorage.setItem('balance', balance);
        localStorage.setItem('dailyLimit', dailyLimit);
        alert("Daily limit upgraded!");
    } else {
        alert("Not enough coins to upgrade the daily limit!");
    }
});
