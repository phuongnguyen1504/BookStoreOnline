package vn.sprint2.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import vn.sprint2.model.Account;
import vn.sprint2.service.IAccountService;

import java.util.Optional;

@Service
public class MyUserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private IAccountService accountService;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Account> acounts = accountService.findByUsername(username);
        if (!acounts.isPresent()) {
            throw new UsernameNotFoundException("Username not found: " + username);
        }
        return new MyUserDetails(acounts.get());
    }
}
