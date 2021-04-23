const infoHtml = {
    titulo: document.getElementById('titulo-post').value,
    autor: document.getElementById('autor-post').value,
    conteudo: document.getElementById('conteudo-post').value

}

function criarPost(event){
    const clicou = event.target.value
    const novoPost = document.getElementById("nova-secao")

    novoPost.innerHTML = `${infoHtml.titulo}` 

    const input = infoHtml.titulo.value
    
}