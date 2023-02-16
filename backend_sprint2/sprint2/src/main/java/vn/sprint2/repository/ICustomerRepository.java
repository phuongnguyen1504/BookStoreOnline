package vn.sprint2.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.Customer;

import java.util.Optional;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long> {
    @Query(value = "select * from customer where email=?1", nativeQuery = true)
    Optional<Customer> findByEmail(String mail);

    Page<Customer> findAll(Pageable pageable);

    @Query(value = "select * from customer where username=?1", nativeQuery = true)
    Customer findByUserName(String username);
    @Modifying(clearAutomatically = true)
    @Query(value = "insert into cart (customer_id) values (?1)",nativeQuery = true)
    void createNewCart(Long id);
}
