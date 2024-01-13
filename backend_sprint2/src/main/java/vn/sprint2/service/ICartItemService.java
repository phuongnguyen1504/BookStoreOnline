package vn.sprint2.service;

import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ICartItemService {



    List<CartItem> findCartItemByUsername(String username);

    Optional<CartItem> findById(Long cartId, Long bookId);

    int addToCart(int amount, LocalDateTime now, Long cartId, Long bookId);

    int update(int i, LocalDateTime now, Long cartId, Long bookId);

    int getnumberOfCart(String username);

    int deleteCartItem(Long cartId, Long bookId);
}
