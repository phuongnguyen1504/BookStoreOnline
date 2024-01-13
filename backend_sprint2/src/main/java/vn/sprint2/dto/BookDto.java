package vn.sprint2.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import vn.sprint2.model.CartItem;
import vn.sprint2.model.Category;
import vn.sprint2.model.OrderDetail;

import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.List;
@Data
@NoArgsConstructor
public class BookDto implements Validator {
    private Long id;
    @NotEmpty(message="Ten sach khong de trong")
    private String name;
    private String author;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date yearPublish;
    private String img_url;
    private Double price;
    private Integer amount;
    private String publisher;
    private String language;
    private Integer numberRating;
    private Integer totalPages;
    private Double weight;
    private Category category;
    private String description;
    private List<CartItem> carts;
    private List<OrderDetail> orders;
    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
