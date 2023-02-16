package vn.sprint2.service;

import vn.sprint2.model.Account;

import java.util.Optional;

public interface IAccountService {
    Optional<Account> findByUsername(String username);
    void updatePassword(Account account, String newPassword);

    void save(Account account);
}
