
function pesquisar() {
    
    document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); 
                pesquisar(); 
            }
        });
        
   
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading');
    section.appendChild(loadingIndicator);


    if(!campoPesquisa){
        section.innerHTML = "<p class='semResultados'> Sem resultados de busca. Você precisa digitar o nome do pokemon ou tipo.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let evolucao = "";
    let titulo = "";
    let tipo = "";
    let descricao = "";
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        tipo = dado.tipo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        evolucao = dado.evolucao.toLowerCase();
        titulo2 = dado.titulo2.toLowerCase();

        if(titulo.includes(campoPesquisa) || tipo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || evolucao.includes(campoPesquisa) || titulo2.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado ${dado.tipoClasse}">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <h3>
                    <a href="#" target="_blank">${dado.titulo2}</a>
                </h3>
                <p class="descricao-meta">${dado.tipo}</p>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.evolucao}</p>
                <p class="descricao-meta">${dado.personalidade}</p>
                <div class="img">
                <img src="${dado.imagem}"alt="${dado.titulo}" style="width: 200px; height: 300px;">
                <img src="${dado.imagem2}"alt="${dado.titulo}" style="width: 200px; height: 300px;">
                <img src="${dado.imagem3}"alt="${dado.titulo}" style="width: 200px; height: 300px;"> <br>
                </div>
            </div>
        `;
        }

    }

    if(!resultados){
        resultados = "<p class='semResultados'> Nenhum resultado de busca.</p>"
    }

    section.innerHTML = resultados;
}