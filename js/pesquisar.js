document.querySelector(".pesquisa").addEventListener("input", function(event) {
    const termoPesquisa = event.target.value.trim().toLowerCase();
    const listaViagens = document.querySelector("#lista-de-viagens");
    const cardsViagens = document.querySelectorAll(".card");

    cardsViagens.forEach(card => {
        const destinoViagem = card.querySelector(".destino").textContent.toLowerCase();
        if (destinoViagem.includes(termoPesquisa) || termoPesquisa === '') {
            card.style.display = "block"; // Exibir o card se houver correspondência ou se o campo de pesquisa estiver vazio
        } else {
            card.style.display = "none"; // Ocultar o card se não houver correspondência
        }
    });
});
