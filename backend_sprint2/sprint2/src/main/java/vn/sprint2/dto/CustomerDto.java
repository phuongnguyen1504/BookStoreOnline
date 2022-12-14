package vn.sprint2.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import vn.sprint2.model.Account;
import vn.sprint2.model.Cart;
import vn.sprint2.model.Order;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class CustomerDto {
    private Long id;
    private String name;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;
    private String email;
    @NotNull
    @JsonProperty
    private boolean gender;
    private String img_url;
    private String phone;
    private String address;
    private Account account;
    private List<Cart> carts;
    private List<Order> orders;
}
