package vn.sprint2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;
import vn.sprint2.repository.ICartItemRepository;
import vn.sprint2.service.ICartItemService;


import java.util.List;
import java.util.Optional;
@Service
public class CartItemServiceImpl implements ICartItemService {
    @Autowired
    private ICartItemRepository cartItemRepository;


    @Override
    public List<CartItem> findCartItemByUsername(String username) {
        return cartItemRepository.findCartItemByUsername(username);
    }


}
