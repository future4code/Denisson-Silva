// EXERCICIO  1 Exercícios de interpretação de código


const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // imprime "a. false"

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // imprime "b. false"

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // imprime "c. true"

console.log("e. ", typeof resultado) // imprime "e. boolean"


// EXERCICIO 2

let array
console.log('a. ', array) // imprime "a. undifined"

array = null
console.log('b. ', array) // imprime "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // imprime "c. 11"

let i = 0
console.log('d. ', array[i]) // imprime "d. undifined"

array[i+1] = 19
console.log('e. ', array) // imprime "e. undifined"

const valor = array[i+6]
console.log('f. ', valor) // imprime "f. undifined"


 // EXERCICIO 1 Exercícios de escrita de código

 let idade
 let bestFriend

 idade = Number(prompt("Qual é a sua idade?"))
 bestFriend = Number(prompt("Qual a idade do seu melhor amigo"))

 let idadeMaior = idade > bestFriend
 let diferencaIdade = idade - bestFriend

 console.log("Sua idade é maior do que a do seu melhor amigo? " + idadeMaior)
 
 console.log("A diferença da sua idade e do seu melhor amigo é de " + bestFriend + " anos!")


 //EXERCICIO 2

 let numPar

 numPar = Number(prompt("Digite um número PAR!!"))

 console.log(numPar % 2) //Esse comando sempre me retorna 0. Testando com numeros ímpares sempre retorna 1


  //EXERCÍCIO 3

  let listaDeTarefas = []
  let tarefa1 = prompt("Qual a sua primeira tarefa do dia?")
  let tarefa2 = prompt("Qual a sua segunda tarefa do dia?")
  let tarefa3 = prompt("Qual a sua terceira tarefa do dia?")

  listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

  console.log(listaDeTarefas)

  let removeTarefa
  removeTarefa = Number(prompt("agora digite qual indice da tarefa você ja realizou, 0, 1 ou 2"))
  listaDeTarefas.splice(removeTarefa, 1)
  console.log(listaDeTarefas)

  //EXERCICIO 4

  let nome
  let email
  nome = prompt("Qual é o seu nome?")
  email = prompt("Qual é o seu e-mail?")

console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + " !")



  //DESAFIOS

  // 1.a
  
  let grauF = 77
  let grauK = (grauF - 32)*5/9 + 273.15
  console.log(grauK + "°K")

  // 1.b
  let grauC = 80
  grauF = (grauC)*9/5 + 32
  console.log(grauF + "°F")

  // 1.c
  grauC = 30
  grauF = (grauC)*9/5 + 32
  grauK = (grauF - 32)*5/9 + 273.15

console.log(grauF + "°F")
console.log(grauK + "°K")

// 1.d
grauC = Number(prompt("Insira aqui o valor em graus Celsius que deseja converter"))
grauF = (grauC)*9/5 + 32
grauK = (grauF - 32)*5/9 + 273.15

console.log("Este é o resultado para o usuario")
console.log(grauF + "°F")
console.log(grauK + "°K")

// 2.a
let quilowPorHora = 0.05
let consumoPotHora = 280
let consumoTotal = quilowPorHora * consumoPotHora
console.log( "O valor total é de R$" + consumoTotal)

let desconto = 0.85
console.log("O valor com desconto de 15% é de R$" + consumoTotal * desconto)

// 3.a
let libras = 20
let kilos = libras * 0.453592
console.log("20lb equivalem a " + kilos + "Kg")

// 3.b
let oz = 10.5
kilos = oz * 0.283495
console.log("10.5oz equivalem a " + kilos + "Kg")

// 3.c
let milha = 100
let metros = milha * 1609.34
console.log("100mi equivalem a " + metros + "Mt")

// 3.d
let pes = 50
metros = pes * 0.3048
console.log("50ft equivalem a " + metros + "Mt")

// 3.d
let galão = 103.56
let litros = galão * 3.78541
console.log("103.56gal equivalem a " + litros + "Lt")

// 3.f
let xicaras = 450
litros = xicaras * 0.24
console.log("450 xic equivalem a " + litros + "Lt")

// 3.g
let xicarasUsuario
xicarasUsuario = Number(prompt("digite quantas xicaras deseja converter para litros"))
litros = xicarasUsuario * 0.24
console.log(xicarasUsuario + " xic equivalem a " + litros + "Lt")












