const fecha = Date.now();
const hoy = new Date(fecha);
const year = hoy.getFullYear();

let footer = document.getElementById('year');
footer.innerHTML = year;

function mostrar() {
    let table = document.getElementById('table').value;
    let row = document.getElementById('row').value;
    let respuesta = document.getElementById('respuesta');

    if (table >= 0 && table <= 20) {
        for (let i = 1; i <= row; i++) {
            const resultado = document.createElement('p');
            resultado.innerHTML = table + ' X ' + i + ' = ' + table * i;
            respuesta.appendChild(resultado);
        }
    }
}
