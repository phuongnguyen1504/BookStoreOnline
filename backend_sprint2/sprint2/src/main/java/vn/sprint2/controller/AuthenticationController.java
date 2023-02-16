package vn.sprint2.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import vn.sprint2.dto.CustomerDto;
import vn.sprint2.model.Account;
import vn.sprint2.model.Cart;
import vn.sprint2.model.Customer;
import vn.sprint2.model.Role;
import vn.sprint2.payload.request.LoginRequest;
import vn.sprint2.payload.response.JwtResponse;
import vn.sprint2.security.JwtUtil;
import vn.sprint2.security.MyUserDetails;
import vn.sprint2.service.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenManager;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private IAccountService accountService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IRoleService roleService;
    @Autowired
    private ICreateCartService cartService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticate(@Valid @RequestBody LoginRequest loginRequest) {
        System.out.println(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        Authentication authentication = this.authenManager.
                authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = myUserDetails.getAuthorities().stream().
                map(GrantedAuthority::getAuthority).collect(Collectors.toList());

        String accessToken = this.jwtUtil.generateAccessToken(loginRequest.getUsername());
        //trả về 1 đối tượng account accountService.findByUsername(myUserDetails.getUsername()) sau đó get để lấy thuộc tính
        Long cart_id = accountService.findByUsername(myUserDetails.getUsername()).get().getCustomer().getCart().getId();
        JwtResponse jwtResponse = new JwtResponse(myUserDetails.getUsername(), accessToken, roles,cart_id);
        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
    }
    @PostMapping("/loginWithSocial")
    public ResponseEntity<JwtResponse> authenticateSocial(@Valid @RequestBody CustomerDto customerDto){
        System.out.println(new CustomerDto());
        customerDto.getAccount().setPassword(customerDto.getAccount().getPassword());
        if (!accountService.findByUsername(customerDto.getAccount().getUsername()).isPresent()){
            Customer customer=new Customer();
            BeanUtils.copyProperties(customerDto,customer);
            customer.getAccount().setPassword(bCryptPasswordEncoder.encode(customer.getAccount().getPassword()));
            System.out.println(customer);
            customerService.save(customer);

            Account account=accountService.findByUsername(customerDto.getAccount().getUsername()).get();
            if (account!=null){
                Role role=roleService.findByName("USER").get();
                List<Role> roles=new ArrayList<>();
                roles.add(role);
                account.setRoles(roles);
                accountService.save(account);
            }
            Cart cart=new Cart();
            cart.setCustomer(customerService.findByUsername(customerDto.getAccount().getUsername()));
            cartService.save(cart);

        }
        Authentication authentication = this.authenManager.
                authenticate(new UsernamePasswordAuthenticationToken(customerDto.getAccount().getUsername(),customerDto.getAccount().getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = myUserDetails.getAuthorities().stream().
                map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        String accessToken = this.jwtUtil.generateAccessToken(customerDto.getAccount().getUsername());
        //trả về 1 đối tượng account accountService.findByUsername(myUserDetails.getUsername()) sau đó get để lấy thuộc tính
        Long cart_id = accountService.findByUsername(myUserDetails.getUsername()).get().getCustomer().getCart().getId();
        JwtResponse jwtResponse = new JwtResponse(myUserDetails.getUsername(), accessToken, roles,cart_id);
        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
    }
}