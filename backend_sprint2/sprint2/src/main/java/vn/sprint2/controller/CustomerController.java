package vn.sprint2.controller;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import vn.sprint2.dto.BookDto;
import vn.sprint2.dto.CustomerDto;
import vn.sprint2.model.Book;
import vn.sprint2.model.Customer;
import vn.sprint2.service.ICustomerService;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/customer")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;
    @GetMapping
    public ResponseEntity<Page<Customer>> findAllCustomer(@PageableDefault(value = 3)Pageable pageable){
        Page<Customer> customers=customerService.findAll(pageable);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody CustomerDto customerDto, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }
        Customer customer=new Customer();
        BeanUtils.copyProperties(customerDto,customer);
        System.out.println(customer.getId());
        customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @Valid @RequestBody CustomerDto customerDto, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }
        Customer customerObj=customerService.findById(id).get();
        if(customerObj==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else {
            Customer customer=new Customer();
            BeanUtils.copyProperties(customerDto,customer);
            customerService.save(customer);
            return new ResponseEntity<>(HttpStatus.OK);

        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Customer> findBookById(@PathVariable("id") Long id){
        Optional<Customer> customer=customerService.findById(id);
        if(!customer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer.get(),HttpStatus.OK);
    }
}
