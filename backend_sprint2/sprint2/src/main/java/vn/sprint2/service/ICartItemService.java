package vn.sprint2.service;

import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;

import java.util.List;
import java.util.Optional;

public interface ICartItemService {



    List<CartItem> findCartItemByUsername(String username);
}
