package vn.sprint2.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Table(name = "order_detail")
@Data
public class OrderDetail {
    @EmbeddedId
    private BookOrderId bookOrderId;
    @ManyToOne
    @MapsId("orderId")
    @JsonBackReference
    private Order order;
    @ManyToOne
    @MapsId("bookId")
    @JsonBackReference
    private Book book;
    private Double price;
    private Integer amount;
}
