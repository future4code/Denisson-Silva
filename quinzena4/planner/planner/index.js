
function criarTarefa() {
    let array = document.getElementById("dias-semana")
    const minhaEntrada = document.getElementById("tarefa")
    if(minhaEntrada.value !== "") {
        
        if(array.value === "domingo") {
            let listaDomingo = document.getElementById("lista-domingo")
            listaDomingo.innerHTML += `<li>${minhaEntrada.value}</li>`
        }
        else if (array.value === "segunda") {
            let listaSegunda = document.getElementById("lista-segunda")
            listaSegunda.innerHTML += `<li>${minhaEntrada.value}</li>`
        }
        else if (array.value === "terca") {
            let listaTerca = document.getElementById("lista-terca")
            listaTerca.innerHTML += `<li>${minhaEntrada.value}</li>`
        }
        else if (array.value === "quarta") {
            let listaQuarta = document.getElementById("lista-quarta")
            listaQuarta.innerHTML += `<li>${minhaEntrada.value}</li>`
        }
        else if (array.value === "quinta") {
            let listaQuinta = document.getElementById("lista-quinta")
            listaQuinta.innerHTML += `<li>${minhaEntrada.value}</li>`
        }
        else if (array.value === "sexta") {
            let listaSexta = document.getElementById("lista-sexta")
            listaSexta.innerHTML += `<li>${minhaEntrada.value}</li>`
        }
        else if (array.value === "sabado") {
            let listaSabado = document.getElementById("lista-sabado")
            listaSabado.innerHTML += `<li>${minhaEntrada.value}</li>`
        }


        minhaEntrada.value = ""
    }
    else {
        alert("Você deve inserir uma nova tarefa!")
    }
}

function limparTudo(){
   let tagUl = document.getElementsByTagName("ul") 
   tagUl.innerHTML = ""
}