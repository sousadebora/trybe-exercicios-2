// Ao chamar a função doingThings:
//doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

// 1 - Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const coffe = () => 'Bora tomar café!!';

//3 -  Crie mais uma função que retorne a string 'Partiu dormir!!';
const sleep = () => 'Partiu dormir!!';

/* 4 -  Agora desenvolva uma _HOF_ chamada `doingThings` e configure esta função
para que imprima no console o resultado da execução das funções que você
 criou nos exemplos anteriores.*/

 const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(wakeUp);
doingThings(coffe);
doingThings(sleep);