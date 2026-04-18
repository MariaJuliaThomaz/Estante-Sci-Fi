const formulario = document.getElementById("formBusca");
const estante = document.getElementById("estante"); 

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const tipoBusca = document.querySelector('select[name="tipoBusca"]').value;
    const termo = document.querySelector('input[name="termo"]').value;

    estante.innerHTML = "<p>Buscando livros no hiperespaço... 🚀</p>";

    fetch(`/livros?tipoBusca=${tipoBusca}&termo=${termo}`)
        .then(resposta => resposta.json())
        .then(dados => {
            estante.innerHTML = ""; 

            if (!dados.items) {
                estante.innerHTML = "<p>Nenhum livro encontrado na galáxia. 😢</p>";
                return;
            }

            dados.items.forEach(livro => {
                const info = livro.volumeInfo;
                
                const titulo = info.title ? info.title : "Sem título";
                const autor = info.authors ? info.authors.join(", ") : "Autor desconhecido";
                const capa = info.imageLinks ? info.imageLinks.thumbnail : "https://via.placeholder.com/128x192?text=Sem+Capa";

                const cardHTML = `
                    <div style="background: #1e1e1e; padding: 15px; border-radius: 8px; width: 180px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
                        <img src="${capa}" alt="Capa" style="border-radius: 4px; margin-bottom: 10px; width: 100%;">
                        <h3 style="font-size: 16px; margin: 5px 0;">${titulo}</h3>
                        <p style="font-size: 14px; color: #aaaaaa;">${autor}</p>
                    </div>
                `;

                estante.innerHTML += cardHTML;
            });
        });
});
