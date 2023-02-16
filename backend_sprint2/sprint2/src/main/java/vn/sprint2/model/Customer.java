package vn.sprint2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "customer")
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Date birthday;
    private String email;
    private boolean gender;
    private String img_url;
    private String phone;
    private String address;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="username")
    private Account account;
    @OneToOne(mappedBy = "customer",cascade = CascadeType.ALL)
    private Cart cart;
    @OneToMany(mappedBy = "customer")
    @JsonManagedReference
    private Set<Order> orders;



}
