"use strict";

(function () {
    const form = document.forms.namedItem('form');
    
    const [ 
        frontCalculatedResult, 
        frontFrequency, 
        frontMonth,
        frontSchoolDays,
        frontFouls 
    ] = document.querySelectorAll('.js-default');
    
    form.addEventListener('submit', event => {
        event.preventDefault();

        const [ 
            month, 
            schoolDays, 
            fouls 
        ] = [
            form.month.value, 
            form.schoolDays.value, 
            form.fouls.value
        ];

        const frequency = (schoolDays - fouls) * 100 / schoolDays;
        
        frontCalculatedResult.style.display = 'flex';
        frontFrequency.innerText = `${frequency.toFixed(1)}%`;
        frontMonth.innerText = `Mês: ${month}`;
        frontSchoolDays.innerText = `Dias letivos: ${schoolDays}`;
        frontFouls.innerText = `Faltas: ${fouls}`;
    });

    form.addEventListener('reset', event => {
        frontCalculatedResult.style.display = 'none';
    });
})();