function updateCountdown() {
    const targetDate = new Date("March 5, 2025 00:00:00").getTime();
    let now = new Date().getTime();
    let diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<div class="text-2xl font-bold text-green-600">La formation a commencé! 🎉</div>';
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();