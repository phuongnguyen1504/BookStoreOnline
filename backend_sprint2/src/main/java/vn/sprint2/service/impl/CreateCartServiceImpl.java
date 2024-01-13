package vn.sprint2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.sprint2.model.Cart;
import vn.sprint2.repository.ICreateCartRepository;
import vn.sprint2.service.ICreateCartService;
@Service
public class CreateCartServiceImpl implements ICreateCartService {
    @Autowired
    private ICreateCartRepository cartRepository;
    @Override
    public void save(Cart cart) {
        cartRepository.save(cart);
    }
}
