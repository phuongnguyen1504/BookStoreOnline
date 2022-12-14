package vn.sprint2.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "cart_item")
@Data
public class CartItem {
    @EmbeddedId
    private BookCartId bookCartId;
    @ManyToOne
    @MapsId("bookId")
    @JoinColumn(name = "book_id")
    private Book book;
    @ManyToOne
    @MapsId("cartId")
    @JoinColumn(name = "cart_id")
    @JsonManagedReference
    private Cart cart;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name= "date_add")
    private LocalDateTime dateAdd;


}
