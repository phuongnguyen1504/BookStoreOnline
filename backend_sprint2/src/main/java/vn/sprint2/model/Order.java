package vn.sprint2.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "book_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "DATE",name = "date_order")
    private Date dateOrder;
    @Column(columnDefinition = "DATE",name = "date_delivery")
    private Date dateDelivery;
    @Column(columnDefinition = "DATE",name = "date_receipt")
    private Date dateReceipt;
    @ManyToOne
    @JoinColumn(name = "customer_id",referencedColumnName = "id")
    @JsonBackReference
    private Customer customer;
    @Column(name = "total_price")
    private Double totalPrice;
    @OneToMany(mappedBy = "order")
    @JsonManagedReference
    private Set<OrderDetail> orderDetails;
}
