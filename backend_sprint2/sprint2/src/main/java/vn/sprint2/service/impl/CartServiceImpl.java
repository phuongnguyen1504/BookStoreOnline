package vn.sprint2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import vn.sprint2.dto.CartItemResponse;

import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;
import vn.sprint2.repository.ICartRepository;
import vn.sprint2.service.ICartService;


import java.util.List;
import java.util.Optional;
@Service
public class CartServiceImpl implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public List<CartItem> findById(Long id) {
        return cartRepository.findById(id);
    }

    @Override
    public Page<CartItem> findAll(Pageable pageable) {
        return cartRepository.findAll(pageable);
    }


}
