package vn.sprint2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;
import vn.sprint2.repository.ICartItemRepository;
import vn.sprint2.service.ICartItemService;


import java.time.LocalDateTime;
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

    @Override
    public Optional<CartItem> findById(Long cartId, Long bookId) {
        return cartItemRepository.findById(cartId, bookId);
    }

    @Override
    public int addToCart(int amount, LocalDateTime dateAdd, Long cartId, Long bookId) {
        return cartItemRepository.addToCart(amount, dateAdd, cartId, bookId);
    }

    @Override
    public int update(int amount, LocalDateTime dateAdd, Long cartId, Long bookId) {
        return cartItemRepository.update(amount, dateAdd, cartId, bookId);
    }

    @Override
    public int getnumberOfCart(String username) {
        return cartItemRepository.getnumberOfCart(username);
    }

    @Override
    public int deleteCartItem(Long cartId, Long bookId) {
        return cartItemRepository.deleteCartItem(cartId, bookId);
    }


}
