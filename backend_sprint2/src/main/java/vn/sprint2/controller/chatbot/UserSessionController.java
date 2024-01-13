package vn.sprint2.controller.chatbot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.sprint2.exceptions.chatbot.UserAlreadyExistException;
import vn.sprint2.exceptions.chatbot.UserNotFoundException;
import vn.sprint2.model.chatbot.UserSession;
import vn.sprint2.service.chatbot.IUserService;


import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/chat/user")
public class UserSessionController {
    @Autowired
    private IUserService userService;
    @GetMapping("/getall")
    public ResponseEntity<List<UserSession>> getAll() throws IOException {
        try{
            return new ResponseEntity<List<UserSession>>(userService.getAll(), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity("User Not Found",HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/getbyusername/{username}")
    public ResponseEntity<UserSession> getUserByUserName(@PathVariable String username) throws IOException{
        try {
            return new ResponseEntity<UserSession>(userService.getUserByUserName(username),HttpStatus.OK);
        } catch (UserNotFoundException e) {
           return new ResponseEntity("User not found",HttpStatus.NOT_FOUND);
        }

    }
    @PostMapping("/add")
    public ResponseEntity<UserSession> addUser(@RequestBody UserSession userSession) throws IOException{
        try {
            return new ResponseEntity<UserSession>(userService.addUser(userSession),HttpStatus.OK);
        } catch (UserAlreadyExistException e) {
            return new ResponseEntity("User already Exists",HttpStatus.CONFLICT);
        }
    }
}
