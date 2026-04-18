📚 Estante de Sci-Fi e Terror 🚀👻

Bem-vinda ao meu projeto de catálogo literário! Esta é uma aplicação Java desenvolvida com o framework Spring Boot que se conecta à API do Google Books para buscar e organizar obras dos meus gêneros favoritos.

🌟 O que o projeto faz?
  A aplicação funciona como uma ponte (API) que:

  🔍 Faz buscas automatizadas por autores específicos.
  
  📥 Consome dados brutos do Google e os transforma em objetos Java organizados.
  
  📤 Entrega um JSON limpo contendo título, autores, data de publicação e link para mais informações.

🛠️ Tecnologias Utilizadas:

  * Java 21 (Aproveitando as versões mais recentes da linguagem!)
  * Spring Boot 3 (Framework para aplicações web robustas)
  * Maven (Gerenciamento de dependências e build)
  * Lombok (Para um código mais limpo e produtivo)
  * Spring Web / RestTemplate (Para integração com APIs REST externas)

🚀 Como rodar na sua máquina
Passo a passo: 

  * Clone o repositório.
  * No arquivo LivroService.java, insira sua chave na variável urlBusca.
  * Execute a classe EstanteScifiApplication.java.
  * Abra o navegador em: http://localhost:8080/livros.
