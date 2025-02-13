// scripts.js

// Function to simulate real-time updates
function simulateRealTimeUpdates() {
    const oxygenLevel = document.getElementById('oxygen-level');
    const temperature = document.getElementById('temperature');
    const gravity = document.getElementById('gravity');
    const fuelLevel = document.getElementById('fuel-level');

    // Simulate oxygen level changes
    setInterval(() => {
        let currentOxygen = parseInt(oxygenLevel.textContent);
        let newOxygen = currentOxygen + (Math.random() * 2 - 1); // Random fluctuation
        newOxygen = Math.max(90, Math.min(100, newOxygen)); // Keep between 90% and 100%
        oxygenLevel.textContent = newOxygen.toFixed(1) + '%';
    }, 3000);

    // Simulate temperature changes
    setInterval(() => {
        let currentTemp = parseInt(temperature.textContent);
        let newTemp = currentTemp + (Math.random() * 2 - 1); // Random fluctuation
        newTemp = Math.max(20, Math.min(25, newTemp)); // Keep between 20°C and 25°C
        temperature.textContent = newTemp.toFixed(1) + '°C';
    }, 3000);

    // Simulate fuel level changes (only in navigation)
    if (fuelLevel) {
        setInterval(() => {
            let currentFuel = parseInt(fuelLevel.textContent);
            let newFuel = currentFuel - 0.1; // Slowly deplete fuel
            newFuel = Math.max(0, newFuel); // Don't go below 0%
            fuelLevel.textContent = newFuel.toFixed(1) + '%';
        }, 5000);
    }
}

// Function to add blinking effect to alerts
function addBlinkingEffect() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setInterval(() => {
            alert.classList.toggle('blink');
        }, 1000);
    });
}

// Function to initialize the app
function initializeApp() {
    simulateRealTimeUpdates();
    addBlinkingEffect();
}

// Run the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);