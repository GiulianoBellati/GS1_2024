function apagar(id){

    document.querySelector(`#${id}`).classList.add('apagando')
    document.querySelector(`#${id}`).addEventListener("animationend", () => document.querySelector(`#${id}`).remove())

    const viagens = JSON.parse(localStorage.getItem("viagens"))
    const viagensAtualizadas = viagens.filter( (t) => t.id !== id)
    localStorage.setItem("viagens", JSON.stringify(viagensAtualizadas))
}