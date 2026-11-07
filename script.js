// Seleciona os três inputs pelo ID
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// Escuta o evento de digitação no campo Celsius
celsiusInput.addEventListener('input', () => {
    const valorCelsius = parseFloat(celsiusInput.value);

    // Se o campo estiver vazio ou não for um número válido, limpa os outros
    if (isNaN(valorCelsius)) {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        return;
    }

    // Fórmula de conversão e formatação com 2 casa decimais
    fahrenheitInput.value = ((valorCelsius * 9 / 5) + 32).toFixed(2);
    kelvinInput.value = (valorCelsius + 273.15).toFixed(2);
});

// Escuta o evento de digitação no campo Fahrenheit
fahrenheitInput.addEventListener('input', () => {
    const valorFahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(valorFahrenheit)) {
        celsiusInput.value = '';
        kelvinInput.value = '';
        return;
    }

    const emCelsius = (valorFahrenheit -32) * 5 / 9;
    celsiusInput.value = emCelsius.toFixed(2);
    kelvinInput.value = (emCelsius + 273.15).toFixed(2);
});

// Escuta o evento de digitação no campo Kelvin
kelvinInput.addEventListener('input', () => {
    const valorKelvin = parseFloat(kelvinInput.value);

    if (isNaN(valorKelvin)) {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        return;
    }

    const emCelsius = valorKelvin - 273.15;
    celsiusInput.value = emCelsius.toFixed(2);
    fahrenheitInput.value = ((emCelsius * 9 / 5) + 32).toFixed(2);
});

// Seleciona o botão de sincronização/limpeza
const btnSinc = document.querySelector('.btn-sinc');

// Ao clicar no botão, limpa todos os campos
btnSinc.addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
    celsiusInput.focus(); // Devolve o cursor para o campo Celsius
});