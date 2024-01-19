(function () {
    "use strict";

    const form = document.querySelector('form');
    const resultado = document.querySelector('#resultado');
    
    form.addEventListener('submit', event => {
        event.preventDefault();

        const valores = [
            document.querySelector('#mes').value,
            document.querySelector('#diasLetivos').value,
            document.querySelector('#faltas').value
        ];

        const frequencia = (valores[1] - valores[2]) * 100/valores[1];

        if (event) {
            resultado.style.display = 'block';

            const porcentagemFrequencia = document.querySelector('#porcentagemFrequencia');
            porcentagemFrequencia.innerText = `${frequencia.toFixed(1)}%`;

            const resultMes = document.querySelector('#resultMes');
            resultMes.innerText = `${valores[0].toUpperCase()} de 2024`;

            const resultDiasLet = document.querySelector('#resultDiasLet');
            resultDiasLet.innerText = `${valores[1]} dias letivos`;

            const resultFaltas = document.querySelector('#resultFaltas');
            resultFaltas.innerText = resultFaltas.innerText = `${valores[2]} faltas`
        }
    });
})();