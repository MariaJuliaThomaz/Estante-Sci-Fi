package estantescifi3;

import lombok.Data;
import java.util.List;

@Data
public class VolumeInfo{
    private String publishedDate;
    private List<String> authors;
    private String title;
    private  String infoLink;
}