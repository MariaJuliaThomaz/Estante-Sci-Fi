package estantescifi3;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LivroService {
    public RespostaGoogle buscaLivroAsimov(){
        RestTemplate restTemplate = new RestTemplate();
        String urlBusca = "https://www.googleapis.com/books/v1/volumes?q=inauthor:isaac+asimov&key=<SUA_CHAVE_AQUI>";
        RespostaGoogle resposta = restTemplate.getForObject(urlBusca, RespostaGoogle.class);
        return resposta;
    }
}
