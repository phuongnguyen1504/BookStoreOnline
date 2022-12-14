package vn.sprint2.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.sprint2.dto.CartItemResponse;
import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;
import vn.sprint2.model.Customer;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    List<CartItem> findById(Long id);


    Page<CartItem> findAll(Pageable pageable);
}
