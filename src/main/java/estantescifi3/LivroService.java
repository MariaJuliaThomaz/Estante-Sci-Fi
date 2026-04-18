package estantescifi3;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LivroService {
    public RespostaGoogle buscaLivroAutor(String autor){
        RestTemplate restTemplate = new RestTemplate();
        autor = autor.replace(" ", "+");
        String urlBusca = "https://www.googleapis.com/books/v1/volumes?q=inauthor:"+ autor +"&key=<SUA_CHAVE_AQUI>";
        RespostaGoogle resposta = restTemplate.getForObject(urlBusca, RespostaGoogle.class);
        return resposta;
    }
    public RespostaGoogle buscaLivroTitulo(String titulo){
        RestTemplate restTemplate = new RestTemplate();
        titulo = titulo.replace(" ", "+");
        String urlBusca = "https://www.googleapis.com/books/v1/volumes?q=intitle:"+ titulo +"&key=<SUA_CHAVE_AQUI>";
        RespostaGoogle resposta = restTemplate.getForObject(urlBusca, RespostaGoogle.class);
        return resposta;
    }
}
