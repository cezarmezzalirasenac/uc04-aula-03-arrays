// import { number } from "@inquirer/prompts";


// Calcule a média de quatro notas
// e se o aluno tiver nota maior que 7,
// mostre aprovado, senão reprovado

// ENTRADA

// array ou vetor
// let notas: [number, number, number, number, number] = [0, 0, 0, 0, 0];
let notas: number[] = []
for (let i = 0; i < 5; i++) {
  notas.push(Math.floor(Math.random() * 11));
}
let lista = [1, "2", true, 3.2]
// const nota1 = questionFloat("Informe a nota 1: ");
// const nota2 = questionFloat("Informe a nota 2: ");
// const nota3 = questionFloat("Informe a nota 3: ");
// const nota4 = questionFloat("Informe a nota 4: ");
// const nota5 = questionFloat("Informe a nota 5: ");

// // PROCESSAMENTO
// const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
let totalNotas = 0;

for (let nota of notas){
  totalNotas = totalNotas + nota;
}

const media = totalNotas / notas.length;

// SAÍDA
// se a media for maior que 7, mostre aprovado
// senão, mostre reprovado
if (media >= 7) {
  console.log("Aluno Aprovado! Média:" + media);
} else {
  console.log("Aluno ReprovadoMédia:" + media);
}
