<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>DigitAprova</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #f4f4f4;
      padding: 20px;
    }
    #texto {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin: 20px auto;
      width: 90%;
      max-width: 700px;
      font-size: 18px;
    }
    #entrada {
      width: 90%;
      max-width: 700px;
      height: 120px;
      font-size: 18px;
      padding: 10px;
    }
    .correta { color: green; }
    .errada { color: red; }
  </style>
</head>
<body>

  <h1>DigitAprova</h1>
  <p>Digite o texto abaixo:</p>

  <div id="texto"></div>

  <textarea id="entrada" placeholder="Comece a digitar aqui..."></textarea>

  <p id="resultado"></p>

  <button onclick="novoTexto()">Novo texto</button>

  <script src="script.js"></script>
</body>
</html>const textos = [
  "A administração pública deve obedecer aos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.",
  "O poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente.",
  "A Constituição Federal é a lei suprema do Estado brasileiro.",
  "O servidor público deve atuar conforme o interesse coletivo."
];

let textoAtual = "";
let inicio = null;

function novoTexto() {
  textoAtual = textos[Math.floor(Math.random() * textos.length)];
  document.getElementById("texto").innerText = textoAtual;
  document.getElementById("entrada").value = "";
  document.getElementById("resultado").innerText = "";
  inicio = new Date();
}

document.getElementById("entrada").addEventListener("input", function () {
  const digitado = this.value;
  let correto = "";

  for (let i = 0; i < digitado.length; i++) {
    if (digitado[i] === textoAtual[i]) {
      correto += `<span class="correta">${textoAtual[i]}</span>`;
    } else {
      correto += `<span class="errada">${textoAtual[i]}</span>`;
    }
  }

  document.getElementById("texto").innerHTML =
    correto + textoAtual.substring(digitado.length);

  if (digitado === textoAtual) {
    const fim = new Date();
    const tempo = (fim - inicio) / 1000;
    const palavras = textoAtual.split(" ").length;
    const wpm = Math.round((palavras / tempo) * 60);
    document.getElementById("resultado").innerText =
      `Parabéns! Velocidade: ${wpm} palavras por minuto`;
  }
});

novoTexto();
