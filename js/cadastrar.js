document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (event) => {
        event.preventDefault()

        const form = document.querySelector("form")

        const viagem = {
            id: "id" + new Date().getTime(),
            destino: form.destino.value,
            data: form.data.value,
            participantes: form.participantes.value,
            tipo: form.tipo.value,
        }

        salvar(viagem)
    })

function salvar(viagem){
    const viagens = JSON.parse(localStorage.getItem("viagens")) || []
    viagens.push(viagem)
    localStorage.setItem("viagens", JSON.stringify(viagens))

    window.location = "index.html"
}