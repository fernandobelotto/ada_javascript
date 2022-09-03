
// 1. Crie uma lista contendo 6 nomes de estados brasileiros. Atribua essa lista para uma constante e na sequencia, execute o método pop nessa lista ( `.pop()` ). Por fim, faça o console.log da lista.

const meusEstados = [
    "São Paulo",
    "Santa Catarina",
    "Rio de Janeiro",
    "Amazonas",
    "Minas Gerais",
    "Bahia",
];


meusEstados.pop();

console.log(meusEstados);



// 2. Crie uma lista contendo 3 números e atribua essa lista a uma variável chamada “notas”. Na sequência, faça a soma dos 3 elementos da lista acessando pela posição e atribua uma variável “somatória”. Por fim, divida o valor da somatória pelo tamanho da lista “notas” usando a propriedade length.



const notas = [8, 9, 10, 11];

const soma = notas[0] + notas[1] + notas[2];

console.log(soma / notas.length);







// 3. É seu primeiro dia de trabalho e você precisa remove um usuário e depois adicionar um novo em uma lista de usuário que você encontrou no código da empresa.

//     A Lista de usuário é a seguinte:

const usuarios = [
  { nome: "Thiago", idade: 16 },
  { nome: "Jade", idade: 25 },
  { nome: "Patrícia", idade: 22 },
  { nome: "Carlos", idade: 52 },
];

usuarios.pop();

const novoUsuario = { nome: "Juliana", idade: 19 };
usuarios.push(novoUsuario);
console.log('lista nova aqui', usuarios)



// 4. No seu código crie quatro variáveis diferentes e para cada uma atribua uma das seguintes opções:
//     1. Uma lista dentro de uma lista
//     2. Um objeto dentro de uma lista
//     3. Uma objeto dentro de um objeto
//     4. Uma lista dentro de um objeto

const listaDentroDeLista = [["uva", 10, true],["maça", 4, false],];


const objetoDentroDeLista = [
  { produto: "Geladeira", valor: 500, moeda: "reais" },
];


const objetoDentroDeObjeto = {
  cliente: "Jaqueline",
  dados: {
    nomeCompleto: "Jaqueline Pereira Gomes",
    idade: 24,
  },
};


const listaDentroDeObjeto = { 
    nome: [
        'fernando', 'gabriel'
    ], 
};

// 5. Quais são as duas formas de se adicionar um comentário no código javascript? dê exemplo em código.

//

/*
*/ 

// 1. Vimos que podemos acessar um elemento em uma lista através do seu index. Como eu acessaria o último elemento de uma lista usando a propriedade .length da lista?

const listaDeExemplo = ["primeiro", "segundo", "terceiro", 'sorvete no quarto'];
console.log(listaDeExemplo[listaDeExemplo.length - 1])

// 1. Criei um objeto usuário que contenha uma propriedade chamada fotos. O valor dessa propriedade é uma lista de objetos que contem nome e data de criação. Como eu posso saber quantas fotos esse usuário possue? escreva o código para isso e faça o console.log desse número. Na sequência, crie uma nova lista de fotos e substitua a lista original do usuário.

const MeuObjeto = {
    fotos: [ 
        { nome: 'minha_foto-na_china.png', data_de_criacao: '21-12-2020' },
        { nome: 'minha_foto-na_paraiba.png', data_de_criacao: '21-12-2020' },
        { nome: 'minha_foto-na_bahia.png', data_de_criacao: '21-12-2020' },
    ],
}


const meuUsuario = {
  fotos: [
    { nome: "paris-02012021.png", criadoEm: "21-21-2020" },
    { name: "china-02012021.png", createdAt: "10-21-2020" },
  ],
};


const novasFotos = [
  { nome: "canada-02012021.png", criadoEm: "21-21-2020" },
  { nome: "portugal-02012021.png", criadoEm: "10-21-2020" },
];


meuUsuario.fotos = novasFotos;

console.log(meuUsuario);

