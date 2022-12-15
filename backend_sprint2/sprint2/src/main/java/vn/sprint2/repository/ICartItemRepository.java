package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;
import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Repository
public interface ICartItemRepository extends JpaRepository<CartItem,Long>{

    @Query(value = "select * from cart_item join cart on cart_item.cart_id=cart.id\n" +
            "join customer on cart.customer_id=customer.id \n" +
            "where customer.username= ? order by cart_item.date_add desc",nativeQuery = true)
    List<CartItem> findCartItemByUsername(String username);
    @Query(value = "select count(*) from cart_item join cart on cart_item.cart_id=cart.id\n" +
            "join customer on cart.customer_id=customer.id \n" +
            "where customer.username= ?",nativeQuery = true)
    int getnumberOfCart(String username);
    @Query(value = "select * from cart_item where cart_id = ? and book_id = ?", nativeQuery = true)
    Optional<CartItem> findById(Long cartId, Long bookId);
    @Transactional
    @Modifying
    @Query(value = "insert into cart_item(cart_id, book_id, quantity, date_add) values(:cartId, :bookId, :amount, :dateAdd)", nativeQuery = true)
    int addToCart(int amount, LocalDateTime dateAdd, Long cartId, Long bookId);
    @Transactional
    @Modifying
    @Query(value = "update cart_item set quantity = ? , date_add = ? where cart_id = ? and book_id = ?", nativeQuery = true)
    int update(int amount, LocalDateTime dateAdd, Long cartId, Long bookId);
    @Transactional
    @Modifying
    @Query(value = "delete from cart_item where cart_id = ? and book_id = ?", nativeQuery = true)
    int deleteCartItem(Long cartId, Long bookId);
}
