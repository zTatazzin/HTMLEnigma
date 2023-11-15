document.getElementById('botaoChute').style.display = 'none';
document.getElementById('objetivo').innerText = 'Escolha uma dificuldade:';
var numeroSecreto;
var tentativas = 0;
var limiteTentativas = 7;

function dificuldade1() {
  reiniciarJogo();
  numeroSecreto = parseInt(Math.random() * 11);
  document.getElementById('objetivo').innerText = 'Escolha um número de 1 a 10';
  document.getElementById('chuteInput').setAttribute('max', 10);
  document.getElementById('botaoChute').style.display = 'inline-block';
}

function dificuldade2() {
  reiniciarJogo();
  numeroSecreto = parseInt(Math.random() * 101);
  document.getElementById('objetivo').innerText = 'Escolha um número de 1 a 100';
  document.getElementById('chuteInput').setAttribute('max', 100);
  document.getElementById('botaoChute').style.display = 'inline-block';
}

function dificuldade3() {
  reiniciarJogo();
  numeroSecreto = parseInt(Math.random() * 1001);
  document.getElementById('objetivo').innerText = 'Escolha um número de 1 a 1000';
  document.getElementById('chuteInput').setAttribute('max', 1000);
  document.getElementById('botaoChute').style.display = 'inline-block';
}

function fazerChute() {
  var chute = parseInt(document.getElementById('chuteInput').value);

  if (chute == numeroSecreto) {
    document.getElementById('erros').innerText = 'Você acertou!';
    document.getElementById('botaoChute').style.display = 'none';
    setTimeout(reiniciarJogo, 2000); // Reiniciar o jogo após 2 segundos
  } else if (chute > numeroSecreto) {
    tentativas++;
    document.getElementById('erros').innerText = 'Errou... o número secreto é menor que ' + chute;
    atualizarTentativas();
  } else if (chute < numeroSecreto) {
    tentativas++;
    document.getElementById('erros').innerText = 'Errou... o número secreto é maior que ' + chute;
    atualizarTentativas();
  }

  if (tentativas >= limiteTentativas) {
    document.getElementById('erros').innerText = ''
    document.getElementById('resultado').innerText = 'Você atingiu o limite de tentativas. O número secreto era ' + numeroSecreto;
    document.getElementById('tentativas').innerText = 'Você tentou: ' + tentativas + ' vezes.';
    document.getElementById('botaoChute').style.display = 'none';
    setTimeout(reiniciarJogo, 2000); // Reiniciar o jogo após 2 segundos
  }
}

function atualizarTentativas() {
  document.getElementById('resultado').innerText = '';
  document.getElementById('tentativas').innerText = 'Número de tentativas: ' + tentativas;
}

function reiniciarJogo() {
  numeroSecreto = null;
  tentativas = 0;
  document.getElementById('chuteInput').value = ''; // Limpar o campo de entrada
  document.getElementById('objetivo').innerText = 'Escolha uma dificuldade:';
  document.getElementById('erros').innerText = '';
  document.getElementById('resultado').innerText = '';
  document.getElementById('tentativas').innerText = '';
}