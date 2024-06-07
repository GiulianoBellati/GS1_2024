document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (event) => {
        event.preventDefault();

        const form = document.querySelector(".form-cadastrar");

        const destino = form.destino.value.trim();
        const data = form.data.value;
        const participantes = form.participantes.value;
        const tipo = form.tipo.value;
        let erros = [];

        if (destino === '') {
            erros.push('Você deve informar o destino da viagem!');
        }
        if (data === '') {
            erros.push('Você deve informar a data da viagem!');
        }
        if (participantes === '') {
            erros.push('Você deve informar o número de participantes da viagem!');
        } else if (isNaN(participantes) || participantes <= 0) {
            erros.push('O número de participantes deve ser um valor positivo!');
        }
        if (tipo === '') {
            erros.push('Você deve informar o tipo de limpeza que foi/será feito na viagem!');
        }
        if (erros.length > 0) {
            erros.unshift('O formulário apresenta a(s) seguinte(s) inconsistência(s):')
            alert(erros.join('\n'));
        } else {
            const viagem = {
                id: "id" + new Date().getTime(),
                destino: form.destino.value,
                data: formatarData(form.data.value),
                participantes: form.participantes.value,
                tipo: formatarTipo(form.tipo.value),
            };

            salvar(viagem);
        }
    });

function formatarData(data) {
    const date = new Date(data + "T00:00:00");
    let dia = date.getUTCDate();
    let mes = date.getUTCMonth() + 1; 
    let ano = date.getUTCFullYear();

    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    return `${dia}/${mes}/${ano}`;
}

function formatarTipo(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.substring(1).toLowerCase();
}

function salvar(viagem) {
    const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
    viagens.push(viagem);
    localStorage.setItem("viagens", JSON.stringify(viagens));

    window.location = "index.html";
}