const usuario1 = {
    nome: 'fernando'
}
const usuario2 = {
    nome: 'thayany'
}
const usuario3 = {
    nome: 'paloma'
}
const usuarios = [usuario1, usuario2, usuario3]
console.log(usuarios[1].nome)

// Array Lista

// desc
// const usuarioInfo1 = [
//     endereco : {
//         cidade: "Curitiba"
//      bairro: "BairroZe"
//      numero: 12
//     }  identidade: {
//         cpf: 1889991111
//      rg: 6588888
//     }
// ]

const usuarioInfoCorrigido = {
    endereco: {
        cidade: "Curitiba",
        bairro: "BairroZe",
        numero: 12
    }, 
    identidade: {
        cpf: 1889991111,
        rg: 6588888
    }
}



// objeto dentro de objeto
const usuario = {
    nome: 'fernando',
    endereco: {
        rua: 'minha rua aqui',
        numero: 12
    }
}

// objeto dentro de lista
[{ nome: 'fernando' }]

// lista dentro de objeto

const usuario4 = {
    nome: 'fernando',
    amigos: [
        'jaqueline', 'carol'
    ]
}

// lista dentro de lista
const listaDentroDeLista = [
    ['fernando'],
    [],
    [],
    []
]


const nome = 'fernando'

const sobrenome = 'bosco'

const nomeCompleto = nome + ' - ' + sobrenome

console.log(`${nome} - ${sobrenome}`)

`fernando - bosco`