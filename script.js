// script.js
const textoTreino = document.getElementById('texto-treino');
const iniciarTreino = document.getElementById('iniciar-treino');

const textoDesafio = document.getElementById('texto-desafio');
const iniciarDesafio = document.getElementById('iniciar-desafio');

const textoSimulado = document.getElementById('texto-simulado');
const iniciarSimulado = document.getElementById('iniciar-simulado');

let frases = [];
let indiceFrase = 0;

// Carregar frases do data.json
fetch('data.json')
 .then(response => response.json())
 .then(data => {
 frases = data.frases;
 });

iniciarTreino.addEventListener('click', () => {
 // Iniciar treino de digitação
 textoTreino.value = frases[indiceFrase].texto;
});

iniciarDesafio.addEventListener('click', () => {
 // Iniciar desafio com tempo
 textoDesafio.value = frases[indiceFrase].texto;
});

iniciarSimulado.addEventListener('click', () => {
 // Iniciar simulado
 textoSimulado.value = frases[indiceFrase].texto;
});
