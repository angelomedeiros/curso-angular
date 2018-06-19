let message = 'Me ajude, Obi-Wan Kenobi. Você é minha única esperança!';
console.log(message);
let episode = 4;
console.log(`Esse é o episódio ${episode}`);
++episode;
console.log(`Esse é o episódio ${episode}`);
// Por padrão o tipo da variavel é Any caso não seja atribuido nehum valor
let nome;
nome = 's';
nome = 1;
// O tipo da variável será string, já que Medeiros é uma!
// Isso ocassionará um erro quando atribuido um tipo diferente de string como no caso 123
// let sobrenome = 'Medeiros'
// sobrenome = 123
// Possibilidade de declarar a variavel o tipo função com sua entrada e saida
// let call: (name: string) => void
let call;
call = name => `${name} Medeiros`;
console.log(call('Angelo'));
// Os dois cófigos abaixo são equivalantes o uso do ? serve para indicar que o parâmetro
// é opcional
const velocidadeA = (aceleracao, tempo = 2) => {
    return aceleracao * tempo;
};
console.log(`Velocidade de A é ${velocidadeA(10)}`);
console.log(`Velocidade de A é ${velocidadeA(10, 3)}`);
// ou
const velocidadeB = (aceleracao, tempo) => {
    const t = tempo || 3;
    return aceleracao * t;
};
console.log(`Velocidade de b é ${velocidadeB(10)}`);
console.log(`Velocidade de b é ${velocidadeB(10, 4)}`);
