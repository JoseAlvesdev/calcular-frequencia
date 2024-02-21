"use strict";

(function () {
    const form = document.forms.namedItem('form');
    const resultado = document.querySelector('.js-calculated-result');

    console.log(form);
    
    form.addEventListener('submit', event => {
        event.preventDefault();

        const [ mes, diasLetivos, faltas ] = [
            form.mes.value, 
            form.diasLetivos.value, 
            form.faltas.value
        ];

        const frequencia = (diasLetivos - faltas) * 100 / diasLetivos;
        
        if (event) {
            resultado.style.display = 'flex';

            document.querySelector('.js-calculated-result__frequency').innerText = `${frequencia.toFixed(1)}%`;
            document.querySelector('.js-information__month').innerText = `Mês: ${mes}`;
            document.querySelector('.js-information__school-day').innerText = `Dias letivos: ${diasLetivos}`;
            document.querySelector('.js-information__fouls').innerText = `Faltas: ${faltas}`;
        }
    });

    form.addEventListener('reset', event => {
        if (event) resultado.style.display = 'none';
    });
})();