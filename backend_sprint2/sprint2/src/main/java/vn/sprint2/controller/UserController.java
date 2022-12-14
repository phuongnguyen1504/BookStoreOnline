package vn.sprint2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.sprint2.model.Account;
import vn.sprint2.security.JwtUtil;
import vn.sprint2.service.IAccountService;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private IAccountService accountService;
    @Autowired
    private JwtUtil jwtUtil;
    @GetMapping("/getUserFromToken")
    public ResponseEntity<Account> getUserFromToken(@RequestParam String token)  {
        String username = jwtUtil.getUsernameFromToken(token);
        Optional<Account> userOptional = accountService.findByUsername(username);

        if(!userOptional.isPresent())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }
}
