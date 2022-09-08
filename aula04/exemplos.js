
// operadores de comparação no javascript!

var variavel1 = 2
var variavel2 = 3

console.log(variavel1 > variavel2) // qual vai ser o valor no console?

// e se eu inverter a lógica?

console.log(variavel1 < variavel2) // a agora?


// exemplos de operadores de comparação

//== igual (igual igual)
// ===  estritamente igual (igual triplo)

// !=  não igual
// !==  estritamente não igual

// > maior que
// < menor que

// >= maior ou igual a
// <= menor ou igual a

//Exemplos!

2>1         // true
2<1         // false
2>=1        // true  (dois é maior ou igual a 1? opa)
2<=1        // false (dois é menor ou igual a 1? nem aqui nem lugar nenhum)
2 != 1      // true
2 !== 1     // true
2 == '2'    // true (como assim fer?? coersão de tipos)
2 === '2'   // false



// Controle de fluxo!

if(true) {
    console.log('esse código é executado')
}
if(false) {
    console.log('esse código nunca é executado')
}

// exemplo de declaração if else
if(minhaVariavel > 3) {
    console.log('minhaVariavel é maior que 3')
} else {
    console.log('minhaVariavel não é maior que 3')
}


// exemplo de declaração if else

if(true) {
    console.log('opa')
} else if(true) {
    console.log()
} else {
    console.log('finalmente')
}

// declaração switch
switch (teclaApertada) {
    case "vermelho":
        console.log('o vestido é vermelho')
        break;
    case "2":
        console.log('o vestido é azul')
        break;
    case "amarelo":
        console.log('o vestido é amarelo')
        break;
    default:
        console.log('eu não sei a cor do vestido')
}

let a = true
let b = false
if( nota > 5 && rendimento < 1000 ) {
    console.log('aprovado e com desconto')
}

if( (nota > 5) || (rendimento < 1000) ) {
    console.log('aprovado e com desconto')
}
console.log('string' || 2)

// operador && (operador E)
// operador || (operador OU)
// operador ! (operador NÃO)


// Tabela para o operador E

//    a   |   b   |   a && b
// -------+-------+----------
// true   |  true |   true
// -------+-------+----------
// true   | false |   false
// -------+-------+----------
// false  | true  |   false
// -------+-------+----------
// false  | false |   false


// Tabela para o operador OU

//    a   |   b   |  a || b
// -------+-------+----------
//  true  | true  |   true
// -------+-------+----------
//  true  | false |   true
// -------+-------+----------
//  false | true  |   true
// -------+-------+----------
//  false | false |   false   

// todo valor primitivo ou não tem um valor booleano correspondente!

if (true) {}
if ({}) {}
if ([]) {}
if (42) {}
if ("0") {}
if ("false") {}
if (new Date()) {}
if (-42) {}
if (12n) {}
if (3.14) {}
if (-3.14) {}
if (Infinity) {}
if (-Infinity) {}


if (true) { console.log('true é verdadeiro')}
if ({}) { console.log('{} é verdadeiro')}
if ([]) { console.log('[] é verdadeiro')}
if (42) { console.log('42 é verdadeiro')}
if ("0") { console.log('"0" é verdadeiro')}
if ("false") { console.log('"false" é verdadeiro')}
if (new Date()) { console.log('new Date() é verdadeiro')}
if (-42) { console.log('-42 é verdadeiro')}
if (12n) { console.log('12n é verdadeiro')}
if (3.14) { console.log('3.14 é verdadeiro')}
if (-3.14) { console.log('-3.14 é verdadeiro')}
if (Infinity) { console.log('Infinity é verdadeiro')}
if (-Infinity) { console.log('-Infinity é verdadeiro')}



// valores falsos!
if (false) {}
if (null) {}
if (undefined) {}
if (0) {}
if (-0) {}
if (0n) {}
if (NaN) {}
if ("") {}


// if (false) { console.log('o valor false é falso!')}
// if (null) { console.log('o valor null é falso!')}
// if (undefined) { console.log('o valor undefined é falso!')}
// if (0) { console.log('o valor 0 é falso!')}
// if (-0) { console.log('o valor -0 é falso!')}
// if (0n) { console.log('o valor 0n é falso!')}
// if (NaN) { console.log('o valor NaN é falso!')}
// if ("") { console.log('o valor "" é falso!')}



// o operador NÃO nega um valor booleano
// (se é true, se torna false, se false, se torna true)
// !true => se torna false

// a negação dupla !! converte o valor para o seu respectivo valor booleano 
// no exemplo a seguir, o console log é true
/*
    let a = "minha string"
    console.log(!!a) // true
*/

// porque o valor booleano de uma string não vazia é true




// if(1 > 2) {
//     console.log('1 é maior que 2')
//     console.log('Não né!')
// }


// if(2 > 1) {
//     console.log('2 é maior que 1')
// }

// if(true) {
//     console.log('true é um valor verdadeiro')
// }

// if(false) {
//     // o console.log a baixo nunca vai ser executado!! (nunca mesmo)
//     console.log('esse conso')
// }


