package vn.sprint2.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.List;

@Data
@Entity
@Table(name = "account")
public class Account {
    @Id
    @Column(name = "username")
    @Pattern(regexp = "[a-zA-Z0-9_-]{5,12}$")
    private String username;
    @Column(name = "password")
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "account_role",joinColumns = {@JoinColumn(name = "username")},inverseJoinColumns = {@JoinColumn(name = "role_id")})
    private List<Role> roles;
    @OneToOne(mappedBy = "account")
    @JsonBackReference
    private Customer customer;
}
