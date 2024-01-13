package vn.sprint2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CartItemResponse {
    private Long customer_id;
    private Integer quantity;
    private String img_url;
    private String name;
    private Double price;


}
