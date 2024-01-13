package vn.sprint2.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "book")
@Data
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String author;
    @Column(name = "year_publish")
    private Date yearPublish;
    private String img_url;
    private Double price;
    private Integer amount;
    private String publisher;
    private String language;
    @Column(name = "number_rating")
    private Integer numberRating;
    @Column(name = "total_pages")
    private Integer totalPages;
    private Double weight;
    @ManyToOne
    @JoinColumn(name = "category_id",referencedColumnName = "id")
//    @JsonBackReference
    private Category category;
    @Column(columnDefinition = "TEXT")
    private String description;
    @OneToMany(mappedBy = "book",cascade = CascadeType.ALL)
    @JsonBackReference(value = "cartitem")
    private Set<CartItem> cartItems;
    @OneToMany(mappedBy = "book")
    @JsonBackReference(value = "order")
    private List<OrderDetail> orderDetails;
//    https://huongdanjava.com/many-many-relationship-extra-columns-jpa.html
}
