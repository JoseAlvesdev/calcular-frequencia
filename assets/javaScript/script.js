;{

const section = document.querySelector('section');
const form = document.querySelector('form');
let fragment = document.createDocumentFragment();

form.addEventListener('submit', event => {
    event.preventDefault();

    const mes = document.querySelector('#mes').value;
    const diasLetivos = document.querySelector('#dias-letivos').value;
    const faltas = document.querySelector('#faltas').value;

    const frequencia = (function calcularFrequencia() {
        return (diasLetivos - faltas) * 100 / diasLetivos;
    })();

    const elementos = ['section', 'h2', 'p', 'p', 'p'];
    const novosElementos = [];
    
    elementos.forEach(elemento => {
        novosElementos.push(document.createElement(elemento));
    });
    
    novosElementos[1].innerText = 'Frequência Calculada:';
    novosElementos[1].style.textAlign = 'left'
    novosElementos[2].innerText = `${frequencia.toFixed(1)}%`;
    novosElementos[3].innerText = mes;
    novosElementos[3].style.textTransform = 'capitalize';
    novosElementos[4].innerText = `Faltas: ${faltas}`;

    let i = 1;

    do {
        novosElementos[0].appendChild(novosElementos[i]);
        i++;
    } while (i < novosElementos.length)

    fragment = novosElementos[0]

    section.after(fragment);
    
    
});


};