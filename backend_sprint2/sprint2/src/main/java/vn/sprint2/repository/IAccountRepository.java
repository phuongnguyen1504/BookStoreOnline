package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.Account;

import java.util.Optional;

@Repository
public interface IAccountRepository extends JpaRepository<Account,String> {

    Optional<Account> findByUsername(String username);
}
