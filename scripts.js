const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festivo" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota miníma:'));

let linhas = '';

form.addEventListener('submit', function (e) {
   e.preventDefault();

   adicionaLinha();
   atualizaTabela();
   atualizaMediaFinal();
});

function adicionaLinha() {
   const atividade = document.getElementById('nome-atividade');
   const nota = document.getElementById('nota-atividade');

   if (atividades.includes(atividade.value)) {
      alert(`A atividade: ${atividade.value} já foi inserida`);
   } else {
      atividades.push(atividade.value);
      notas.push(parseFloat(nota.value));

      let linha = '<tr>';
      linha += `<td>${atividade.value}</td>`;
      linha += `<td>${nota.value}</td>`;
      linha += `<td>${nota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
      linha += '</tr>';

      linhas += linha;
   }

   atividade.value = '';
   nota.value = '';
}

function atualizaTabela() {
   const tabela = document.querySelector('tbody');
   tabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
   const mediaFinal = calcMediaFinal();

   document.getElementById('media-final-valor').innerHTML = mediaFinal;
   document.getElementById('media-final-result').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calcMediaFinal() {
   let somaNotas = 0;

   for (let i = 0; i < notas.length; i++) {
      somaNotas += notas[i];
   }

   return somaNotas / notas.length;
}