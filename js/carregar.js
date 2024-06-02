const viagens = JSON.parse(localStorage.getItem("viagens")) || []

viagens.forEach( viagem => card(viagem) )

function card(viagem){

    const content =`
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <div class="header destino">${viagem.destino}</div>
                    <div class="data">${viagem.data}</div>
                    <div class="participantes">${viagem.participantes} participantes</div>
                    <div class="tipo">${viagem.tipo}</div>
                </div>
        
                <button onclick="apagar('${viagem.id}')"  class="ui inverted red button">
                    <i class="sync trash icon"></i>
                    Deletar
                </button>
            </div>  
        </div>`

const card = document.createElement("div")
card.id = viagem.id
card.innerHTML = content
document
    .querySelector("#lista-de-viagens")
    .appendChild(card)
}