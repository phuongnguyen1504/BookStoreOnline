package vn.sprint2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import vn.sprint2.model.Book;
import vn.sprint2.model.CartItem;

import vn.sprint2.payload.response.ResponseMessage;
import vn.sprint2.service.IBookService;
import vn.sprint2.service.ICartItemService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/cart")
public class CartController {
    @Autowired
    private ICartItemService cartItemService;
    @Autowired
    private IBookService bookService;

    @GetMapping("/getCartByUsername")
    public ResponseEntity<List<CartItem>> getCartByUsername(@RequestParam String username) {
        return new ResponseEntity<>(cartItemService.findCartItemByUsername(username), HttpStatus.OK);
    }
    @GetMapping("/getNumberOfCart")
    public ResponseEntity<Integer> getNumberOfCart(@RequestParam String username) {
        return new ResponseEntity<>(cartItemService.getnumberOfCart(username), HttpStatus.OK);
    }
    @GetMapping("/addToCart")
    public ResponseEntity<ResponseMessage> addToCart(@RequestParam Long cartId, @RequestParam Long bookId, @RequestParam int amount) {
        Optional<Book> bookOptional = bookService.findById(bookId);
        if (!bookOptional.isPresent()) {
            return new ResponseEntity<>(new ResponseMessage("Không tồn tại sách cần mua."), HttpStatus.BAD_REQUEST);
        }
        Optional<CartItem> cartItemOptional = cartItemService.findById(cartId, bookId);
        int numberCartAdd = 0;
        if (!cartItemOptional.isPresent()) {
            if (bookOptional.get().getAmount() < amount) {
                return new ResponseEntity<>(new ResponseMessage("Kho hàng hiện tại không đủ số lượng yêu cầu."), HttpStatus.BAD_REQUEST);
            }
            numberCartAdd = cartItemService.addToCart(amount, LocalDateTime.now(), cartId, bookId);
        } else {
            if (bookOptional.get().getAmount() < cartItemOptional.get().getQuantity() + amount) {
                return new ResponseEntity<>(new ResponseMessage("Kho hàng hiện tại không đủ số lượng yêu cầu."), HttpStatus.BAD_REQUEST);
            }
            numberCartAdd = cartItemService.update(amount + cartItemOptional.get().getQuantity(), LocalDateTime.now(), cartId, bookId);
        }
        if (numberCartAdd <= 0) {
            return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm không thành công"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm thành công"), HttpStatus.OK);
    }
    @DeleteMapping("/{cartId}/{bookId}")
    public ResponseEntity<ResponseMessage> deleteCartItem(@PathVariable Long cartId, @PathVariable Long bookId) {
        Optional<CartItem> cartItemOptional = cartItemService.findById(cartId, bookId);
        if (!cartItemOptional.isPresent()) {
            return new ResponseEntity<>(new ResponseMessage("Không tồn tại hàng của bạn"), HttpStatus.BAD_REQUEST);
        }
        int numberCartDelete = cartItemService.deleteCartItem(cartId, bookId);
        if (numberCartDelete <= 0) {
            return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng không thành công"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng thành công"), HttpStatus.OK);
    }
    @GetMapping("/updateCartItem")
    public ResponseEntity<ResponseMessage> updateCartItem(@RequestParam Long cartId, @RequestParam Long bookId, @RequestParam int amount) {
        Optional<Book> bookOptional = bookService.findById(bookId);
        if (!bookOptional.isPresent()) {
            return new ResponseEntity<>(new ResponseMessage("Sách không tồn tại."), HttpStatus.BAD_REQUEST);
        }
        if (bookOptional.get().getAmount() < amount) {
            return new ResponseEntity<>(new ResponseMessage("Kho hàng hiện tại không đủ số lượng yêu cầu."), HttpStatus.BAD_REQUEST);
        }
        Optional<CartItem> cartItemOptional = cartItemService.findById(cartId, bookId);
        if (!cartItemOptional.isPresent()) {
            return new ResponseEntity<>(new ResponseMessage("Không tìm thấy giỏ hàng."), HttpStatus.BAD_REQUEST);
        }
        int numberCartUpdate = cartItemService.update(amount, LocalDateTime.now(), cartId, bookId);
        if (numberCartUpdate <= 0) {
            return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng không thành công"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng thành công"), HttpStatus.OK);
    }
}
