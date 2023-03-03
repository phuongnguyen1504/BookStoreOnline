package vn.sprint2.controller.chatbot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vn.sprint2.model.chatbot.UserSession;
import vn.sprint2.service.impl.chatbot.UserSessionService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/chatbot")
public class UserSessionController {
    @Autowired
    private UserSessionService userSessionService;
    @GetMapping
    public List<UserSession> findAll(){
        return userSessionService.findAll();
    }
    @GetMapping("/{id}")
    public UserSession findById(@PathVariable String id) {
        return userSessionService.findById(id);
    }
    @PostMapping
    public UserSession create(@RequestBody UserSession userSession) {
        return userSessionService.save(userSession);
    }
}
