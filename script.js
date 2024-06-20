function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
    const explanationElement = document.getElementById('explanation');

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number.";
        explanationElement.textContent = "";
        return;
    }

    let convertedTemp;
    let explanation;

    if (unit === 'C') {
        convertedTemp = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature}°C sama dengan ${convertedTemp.toFixed(2)}°F.`;
        explanation = "Untuk mengonversi Celsius ke Fahrenheit, kalikan dengan 9/5 lalu tambahkan 32.";
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature}°F sama dengan ${convertedTemp.toFixed(2)}°C.`;
        explanation = "Untuk mengonversi Fahrenheit ke Celcius, kurangi 32 lalu kalikan dengan 5/9..";
    }

    explanationElement.textContent = explanation;
}