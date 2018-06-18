"use strict";
var message = 'Me ajude, Obi-Wan Kenobi. Você é minha única esperança!';
console.log(message);
var episode = 4;
console.log("Esse \u00E9 o epis\u00F3dio " + episode);
++episode;
console.log("Esse \u00E9 o epis\u00F3dio " + episode);
// Por padrão o tipo da variavel é Any caso não seja atribuido nehum valor
var nome;
nome = 's';
nome = 1;
// O tipo da variável será string, já que Medeiros é uma!
// Isso ocassionará um erro quando atribuido um tipo diferente de string como no caso 123
// let sobrenome = 'Medeiros'
// sobrenome = 123
