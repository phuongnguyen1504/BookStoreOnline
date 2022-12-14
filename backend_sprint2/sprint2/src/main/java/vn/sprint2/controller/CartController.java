package vn.sprint2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import vn.sprint2.model.CartItem;

import vn.sprint2.service.ICartItemService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/cart")
public class CartController {
    @Autowired
    private ICartItemService cartItemService;

    @GetMapping("/getCartByUsername")
    public ResponseEntity<List<CartItem>> getCartByUsername(@RequestParam String username) {
        return new ResponseEntity<>(cartItemService.findCartItemByUsername(username), HttpStatus.OK);
    }

}
