package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.Cart;
@Repository
public interface ICreateCartRepository extends JpaRepository<Cart, Long> {
}
