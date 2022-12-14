package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import vn.sprint2.dto.CartItemResponse;
import vn.sprint2.model.BookCartId;
import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;
import vn.sprint2.model.Customer;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;


@Repository
public interface ICartRepository extends JpaRepository<CartItem, BookCartId>{
    @Query(value = "select * from cart_item ci join cart c on c.id=ci.cart_id join book b on ci.book_id=b.id where c.id=1;",nativeQuery = true)
//    @Query(value = "select * from cart_item where `cart_item`.`cart_id`=:id",nativeQuery = true)
    List<CartItem> findById(@Param("id") Long id);
}
