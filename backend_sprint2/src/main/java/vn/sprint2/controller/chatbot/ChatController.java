package vn.sprint2.controller.chatbot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.sprint2.exceptions.chatbot.ChatAlreadyExistException;
import vn.sprint2.exceptions.chatbot.ChatNotFoundException;
import vn.sprint2.exceptions.chatbot.NoChatExistsInTheRepository;
import vn.sprint2.model.chatbot.Chat;
import vn.sprint2.model.chatbot.Message;
import vn.sprint2.service.chatbot.IChatService;
import vn.sprint2.service.chatbot.impl.SequenceGeneratorService;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/chats")
public class ChatController {
    @Autowired
    private IChatService chatService;
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    @PostMapping("/add")
    public ResponseEntity<Chat> createChat(@RequestBody Chat chat) throws IOException{
        try{
            return new ResponseEntity<Chat>(chatService.addChat(chat), HttpStatus.CREATED);
        } catch (ChatAlreadyExistException e) {
            return new ResponseEntity("Chat already exist",HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/all")
    public ResponseEntity<List<Chat>> getAllChats(){
        try{
            return new ResponseEntity<List<Chat>>(chatService.findAllchats(),HttpStatus.OK);
        } catch (NoChatExistsInTheRepository e) {
            return new ResponseEntity("List not Found",HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Chat> getChatById(@PathVariable int id){
        try {
            return new ResponseEntity<Chat>(chatService.getById(id),HttpStatus.OK);
        } catch (ChatNotFoundException e) {
            return new ResponseEntity("Chat Not Found",HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/firstUserName/{username}")
    public ResponseEntity<?> getChatByFirstUserName(@PathVariable String username){
        try{
            HashSet<Chat> chats=this.chatService.getChatByFirstUserName(username);
            return new ResponseEntity<>(chats,HttpStatus.OK);
        } catch (ChatNotFoundException e) {
            return new ResponseEntity("Chat not exists",HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/secondUserName/{username}")
    public ResponseEntity<?> getChatBySecondUserName(@PathVariable String username) {

        try {
            HashSet<Chat> byChat = this.chatService.getChatBySecondUserName(username);
            return new ResponseEntity<>(byChat, HttpStatus.OK);
        } catch (ChatNotFoundException e) {
            return new ResponseEntity("Chat Not Exits", HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/getChatByFirstUserNameOrSecondUserName/{username}")
    public ResponseEntity<?> getChatByFirstUserNameOrSecondUserName(@PathVariable String username) {

        try {
            HashSet<Chat> byChat = this.chatService.getChatByFirstUserNameOrSecondUserName(username);
            return new ResponseEntity<>(byChat, HttpStatus.OK);
        } catch (ChatNotFoundException e) {
            return new ResponseEntity("Chat Not Exits", HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/getChatByFirstUserNameAndSecondUserName")
    public ResponseEntity<?> getChatByFirstUserNameAndSecondUserName(@RequestParam("firstUserName") String firstUserName, @RequestParam("secondUserName") String secondUserName){

        try {
            HashSet<Chat> chatByBothEmail = this.chatService.getChatByFirstUserNameAndSecondUserName(firstUserName, secondUserName);
            System.out.println(chatByBothEmail);
            return new ResponseEntity<>(chatByBothEmail, HttpStatus.OK);
        } catch (ChatNotFoundException e) {
            return new ResponseEntity("Chat Not Exits", HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/message/{chatId}")
    public ResponseEntity<Chat> addMessage(@RequestBody Message add , @PathVariable int chatId) throws ChatNotFoundException {
        return new ResponseEntity<Chat>(chatService.addMessage(add,chatId), org.springframework.http.HttpStatus.OK);
    }
}
