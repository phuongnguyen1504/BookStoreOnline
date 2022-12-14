package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import vn.sprint2.model.Cart;
import vn.sprint2.model.CartItem;

import java.util.List;
import java.util.Optional;


@Repository
public interface ICartItemRepository extends JpaRepository<CartItem,Long>{

    @Query(value = "select * from cart_item join cart on cart_item.cart_id=cart.id\n" +
            "join customer on cart.customer_id=customer.id \n" +
            "where customer.username= ? order by cart_item.date_add desc",nativeQuery = true)
    List<CartItem> findCartItemByUsername(String username);
}
