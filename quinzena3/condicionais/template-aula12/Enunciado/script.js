// Exercicio 1
/* O código tem como função:
1- Receber a entrada do usuário
2- Transformar essa entrada em número
3- Verificar se esse número é ppar ou impar.
4- Imprimir a conclusão com "Passou no teste." e "Não passou no teste." 
*/

// Exercicio 2
/* 
A. O código tem a seguinte função:
1- Receber um valor do usuário com o nome de uma fruta
2- Dentro de um switch case determinar o valor da variavel preço dessa fruta utilizando comparadores e condicionais 
3- Imprimir as duas variaveis dentro de um contexto lógico informando o preço referente a fruta digitada pelo usuario

B. "O preço da fruta maçã é R$2,25

C. Seria impresso o valor da Pêra pois o codigo da mesma é o penultimo 
*/

// Exercício 3
/*
A. A primeira linha do código pede uma entrada para o usuário e ja transforma ela em número
B. se digita 10 vai imprimir que "Esse número passou no teste" e se digitar -10 vai imprimir somente "Essa mensagem é secreta!!!"
C. não Havera erro pois a variavel mensagem foi declarada em um escopo pai e ele compartilha suas variaveis
*/

// Exercício 4

let userAge = Number(prompt("Qual a sua idade?"))

if(userAge >= 18){
    console.log("Você pode dirigir")
}
else{
    console.log("Você não pode dirigir.")
}

// Exercício 5

let userPeriod = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)")

if(userPeriod === "M"){
    console.log("Bom Dia!")
}
else if(userPeriod === "V"){
    console.log("Boa Tarde!")
}
else if(userPeriod === "N"){
    console.log("Boa Noite!")
}

// Exercício 6

let userPeriod = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)")

switch(userPeriod){
       case "M":
           console.log("Bom Dia!")
           break

       case "V":
          console.log("Boa Tarde!")
          break

     case "N":
         console.log("Boa Noite!")
}

// Exercício 7

let userFilm = prompt("Escolha o gênero do filme: Terror, Ação ou Fantasia")
let userPrice = Number(prompt("Quanto você deseja pagar? 5, 10 ou 15"))

if(userFilm === "Fantasia" && userPrice > 15 ){
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}

// Desafio 1

let userFilm = prompt("Escolha o gênero do filme: Terror, Ação ou Fantasia")
let userPrice = Number(prompt("Quanto você deseja pagar? 5, 10 ou 15"))
let userSnack = prompt("Qual Snack você prefere?: Pipoca, chocolate ou mms")

if(userFilm === "Fantasia" && userPrice < 15 ){
    console.log("Bom filme!" + "...com " + userSnack)
}
else {
    console.log("Escolha outro filme :(")
}






