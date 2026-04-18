package estantescifi3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LivroController {
    @Autowired
    private LivroService livroService;

    @GetMapping("/livros")
    public RespostaGoogle mostrarLivros( @RequestParam String tipoBusca, @RequestParam String termo){
        if (tipoBusca.equals("autor")) {
            return livroService.buscaLivroAutor(termo);
        }
        else if (tipoBusca.equals("titulo")) {
            return livroService.buscaLivroTitulo(termo);
        }
        else {
            return new RespostaGoogle();
        }
    }
    
}
