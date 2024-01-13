package vn.sprint2.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.sprint2.model.Customer;

import java.util.Optional;

public interface ICustomerService {
    Optional<Customer> findByEmail(String mail);
    Page<Customer> findAll(Pageable pageable);
    void delete(Long id);
    Optional<Customer> findById(Long id);

    void save(Customer customer);

    Customer findByUsername(String username);

    void createNewCart(Long id);


}
