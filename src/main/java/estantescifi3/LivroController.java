package estantescifi3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LivroController {
    @Autowired
    private LivroService livroService;

    @GetMapping("/livros")
    public RespostaGoogle mostrarLivros(){
        return livroService.buscaLivroAsimov();
    }
}
