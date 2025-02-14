document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const city = document.getElementById('city');
    let outputResult = document.getElementById('weather-result');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cityValue = city.value;
        outputResult.innerHTML = `
            <p class="text-3xl font-bold">${cityValue}</p>
            <p class="text-xl">80deg</p>
            <p class="text-lg">Sunny</p>
        `;
    });
});