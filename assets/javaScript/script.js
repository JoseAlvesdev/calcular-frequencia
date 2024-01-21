"use strict";

(function () {
    const form = document.forms.namedItem('form');
    const resultado = document.querySelector('#resultado');
    
    form.addEventListener('submit', event => {
        event.preventDefault();

        const [ mes, diasLetivos, faltas ] = [
            form.mes.value, 
            form.diasLetivos.value, 
            form.faltas.value
        ];

        const frequencia = (diasLetivos - faltas) * 100 / diasLetivos;
        
        if (event) {
            resultado.style.display = 'block';

            document.querySelector('#porcentagemFrequencia').innerText = `${frequencia.toFixed(1)}%` ;

            document.querySelector('#resultMes').innerText = `${mes.toUpperCase()} de 2024`;

            document.querySelector('#resultDiasLet').innerText = `${diasLetivos} letivos`;

            document.querySelector('#resultFaltas').innerText = `${faltas} faltas`;
        }
    });
})();