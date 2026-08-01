const modal = document.querySelector(".modal");
const botoes = document.querySelectorAll(".btn-funcionalidades");
const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const lista = document.querySelector("#lista-funcionalidades");
const btnFechar = document.querySelector("#fechar")

let projetos = []

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const id = Number(botao.dataset.id);

        const projeto = projetos.find(item => item.id === id);

        abrirProjeto(projeto);

    });

});

async function carregarProjetos() {

    const resposta = await fetch("dados/projetos.json");

    projetos = await resposta.json();

    console.log(projetos);

}

carregarProjetos();

function abrirProjeto(projeto) {

    titulo.textContent = projeto.nome;

    descricao.textContent = projeto.descricao;

    lista.innerHTML = "";

    projeto.funcionalidades.forEach(funcionalidade => {

        const li = document.createElement("li");

        li.textContent = funcionalidade;

        lista.appendChild(li);

    });

    modal.classList.remove("oculto");

}

btnFechar.addEventListener("click", () => {
    modal.classList.add("oculto");
})

