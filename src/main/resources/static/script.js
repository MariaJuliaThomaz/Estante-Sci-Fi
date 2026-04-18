const formulario = document.getElementById("formBusca");
const estante = document.getElementById("estante"); // Pegamos a estante do HTML

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede a página de recarregar

    const tipoBusca = document.querySelector('select[name="tipoBusca"]').value;
    const termo = document.querySelector('input[name="termo"]').value;

    // Coloca um aviso na tela enquanto o Java pensa
    estante.innerHTML = "<p>Buscando livros no hiperespaço... 🚀</p>";

    fetch(`/livros?tipoBusca=${tipoBusca}&termo=${termo}`)
        .then(resposta => resposta.json())
        .then(dados => {
            // Limpa o aviso de "buscando"
            estante.innerHTML = ""; 

            // Se o Google não achar nada, avisamos o usuário
            if (!dados.items) {
                estante.innerHTML = "<p>Nenhum livro encontrado na galáxia. 😢</p>";
                return;
            }

            // Para cada livro que o Google mandou, vamos desenhar um Card
            dados.items.forEach(livro => {
                const info = livro.volumeInfo;
                
                // Extraindo as informações com cuidado caso o Google mande algo vazio
                const titulo = info.title ? info.title : "Sem título";
                const autor = info.authors ? info.authors.join(", ") : "Autor desconhecido";
                const capa = info.imageLinks ? info.imageLinks.thumbnail : "https://via.placeholder.com/128x192?text=Sem+Capa";

                // Desenhando a caixinha (Card) do livro com HTML e estilo direto no JS
                const cardHTML = `
                    <div style="background: #1e1e1e; padding: 15px; border-radius: 8px; width: 180px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
                        <img src="${capa}" alt="Capa" style="border-radius: 4px; margin-bottom: 10px; width: 100%;">
                        <h3 style="font-size: 16px; margin: 5px 0;">${titulo}</h3>
                        <p style="font-size: 14px; color: #aaaaaa;">${autor}</p>
                    </div>
                `;

                // Adicionamos o card pronto dentro da nossa estante!
                estante.innerHTML += cardHTML;
            });
        });
});