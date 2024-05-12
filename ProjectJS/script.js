function converterFahrenheit() {
    var tempC = document.getElementById("tempC").value;
    var tempF = (tempC * 9/5) + 32;
    document.getElementById("tempF").value = tempF.toFixed(2);
}

function converterParaCelsius() {
    var tempF = document.getElementById("tempF").value;
    var tempC = (tempF - 32) * 5/9;
    document.getElementById("tempC").value = tempC.toFixed(2);
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});