//Exercício 1

function inverteArray(array) {
   array = [0, 8, 23, 16, 10, 15, 41, 12, 13] 
   arrayInvertido = array.reverse();
   return array
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   array [0, 8, 23, 16, 10, 15, 41, 12, 13] 
   let elevado = []
   for(let i = 0 ; i < array.length; i++){
      if(array[i] % 2 === 0){
         let resultado = 1
         resultado = array[i] ** 2
         elevado.push(resultado)
         }
   }       return elevado
}

//Exercício 3

function retornaNumerosPares (array) {
   array [0, 8, 23, 16, 10, 15, 41, 12, 13]
   let divisiveisPorDois = []
   for(i of array){
      if(array[i] % 2 === 0){
         divisiveisPorDois.push(array[i])
      }
   } return divisiveisPorDois
}

//Exercício 4

function retornaMaiorNumero(array) {
   array [0, 8, 23, 16, 10, 15, 41, 12, 13]
   let maiorNumero = 0
   for(let i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
         maiorNumero = array[i]
      } 
   } return maiorNumero
}


//Exercício 5

function retornaQuantidadeElementos (array) {
   array [0, 8, 23, 16, 10, 15, 41, 12, 13]
   let totalDeElementos = array.length
   return totalDeElementos
}

//Exercício 6

function retornaExpressoesBooleanas() {
 
 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 
 const booleano4 = !booleano3 
 return[false, false, true, true, true]
 
}

//Exercício 7

function retornaNNumerosPares(n) {
  let arrayPares = []
  for( let index = 0; arrayPares.length < n; index++){
   if(index % 2 === 0){
      arrayPares.push(index)
   }
}
  return arrayPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  let tipoTriangulo
  if((a === b) && (b === c) ){
     tipoTriangulo = "Equilátero"
  }
  else if((a === b || a === c) && (b === c || b === a )){
     tipoTriangulo = "Isósceles"
  }
  else if((a !== b) && (b !== c) ){
   tipoTriangulo = "Escaleno"
}   return tipoTriangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorNumero 
   let menornumero 
   let maiorDivisivelporMenor
   let diferenca
   //esse codigo checa o maior numero
   if(num1 > num2){
      maiorNumero = num1
      menornumero = num2
   }
   else{
      maiorNumero = num2
      menornumero = num1
   }
   //esse codigo verifica se o maior é divisivel pelo menor
   maiorDivisivelporMenor = maiorNumero % menornumero === 0;

   diferenca = maiorNumero - menornumero;
   //esse retorna o objeto

   return {
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: diferenca
    }

}

// Exercício 10

function segundoMaiorEMenor(array) {

}

//Exercício 11

function ordenaArray(array) {
  
}

// Exercício 12

function filmeFavorito() {
let nome = "O Diabo Veste Prada"
let ano = 2006
let diretor = "David Frankel"
let atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

   return{
   nome: nome,
   ano: ano, 
   diretor: diretor,
   atores: atores
   }
}

// Exercício 13

function imprimeChamada() {
   let nome = "O Diabo Veste Prada"
   let ano = 2006
   let diretor = "David Frankel"
   let atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

   let filmeFavorito = {
   nome: nome,
   ano: ano, 
   diretor: diretor,
   atores: atores
   }

   return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let perimetro = 2 * (lado1 + lado2)
   let area = lado1 * lado2
   const areas = {
      largura: lado1,
      altura: lado2,
      perimetro: perimetro,
      area: area
   } 
   return areas
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return{
  ...pessoa,
  nome: "ANÔNIMO"  
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const maioresDeIdade = arrayDePessoas.filter((maiores) => {
      return maiores.idade >= 18
   })
   return maioresDeIdade
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const menoresDeIdade = arrayDePessoas.filter((menores) => {
      return menores.idade < 18
   })
   return menoresDeIdade
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const multPor2 = array.map((numero) => {
      return numero * 2   
   })
   return multPor2
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const multPor2 = array.map((numero) => {
      return String(numero * 2)  
   })
   return multPor2
}

// Exercício 17, letra C

function verificaParidade(array) {
   const multPor2 = array.map((numero) => {
      if(numero % 2 === 0){
         return `${numero} é par`
      }  
      else{
         return `${numero} é ímpar`
      }
   })
   return multPor2
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const pessoasAutorizadas = pessoas.filter((verifica) => {
      if((verifica.altura >= 1.5) && (verifica.idade > 14) && (verifica.idade < 60)){
         return verifica
      }
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoasNaoAutorizadas = pessoas.filter((verifica) => {
      if((verifica.altura < 1.5) || (verifica.idade < 14) || (verifica.idade > 60)){
         return verifica
      }
   })
   return pessoasNaoAutorizadas
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta() {
  
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}