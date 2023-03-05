package vn.sprint2.service.chatbot.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.sprint2.exceptions.chatbot.ChatAlreadyExistException;
import vn.sprint2.exceptions.chatbot.ChatNotFoundException;
import vn.sprint2.exceptions.chatbot.NoChatExistsInTheRepository;
import vn.sprint2.model.chatbot.Chat;
import vn.sprint2.model.chatbot.Message;
import vn.sprint2.repository.chatbot.ChatRepository;
import vn.sprint2.service.chatbot.IChatService;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
@Service
public class ChatServiceImpl implements IChatService {
    @Autowired
    private ChatRepository chatRepository;
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    @Override
    public Chat addChat(Chat chat) throws ChatAlreadyExistException {
        chat.setChatId(sequenceGeneratorService.generateSequence(Chat.SEQUENCE_NAME));
        return chatRepository.save(chat);
    }

    @Override
    public List<Chat> findAllchats() throws NoChatExistsInTheRepository {
        if (chatRepository.findAll().isEmpty()){
            throw new NoChatExistsInTheRepository();
        }else {
            return chatRepository.findAll();
        }
    }

    @Override
    public Chat getById(int id) throws ChatNotFoundException {
        Optional<Chat> chatid=chatRepository.findById(id);
        if (chatid.isPresent()){
            return chatid.get();
        }
        else {
            throw new ChatNotFoundException();
        }
    }

    @Override
    public HashSet<Chat> getChatByFirstUserName(String username) throws ChatNotFoundException {
        HashSet<Chat> chats=chatRepository.getChatByFirstUserName(username);
        if (chats.isEmpty()){
            throw new ChatNotFoundException();
        }
        else {
            return chats;
        }
    }

    @Override
    public HashSet<Chat> getChatBySecondUserName(String username) throws ChatNotFoundException {
        HashSet<Chat> chats=chatRepository.getChatBySecondUserName(username);
        if (chats.isEmpty()){
            throw new ChatNotFoundException();
        }
        else {
            return chats;
        }
    }

    @Override
    public HashSet<Chat> getChatByFirstUserNameOrSecondUserName(String username) throws ChatNotFoundException {
        HashSet<Chat> chat1=chatRepository.getChatByFirstUserName(username);
        HashSet<Chat> chat2=chatRepository.getChatBySecondUserName(username);
        chat2.addAll(chat1);
        if (chat1.isEmpty()&&chat2.isEmpty()){
            throw new ChatNotFoundException();
        }else if(chat2.isEmpty()){
            return chat1;
        }
        else {
            return chat2;
        }
    }

    @Override
    public HashSet<Chat> getChatByFirstUserNameAndSecondUserName(String firstUserName, String secondUserName) throws ChatNotFoundException {
        HashSet<Chat> chat1=chatRepository.getChatByFirstUserNameAndSecondUserName(firstUserName,secondUserName);
        HashSet<Chat> chat2=chatRepository.getChatBySecondUserNameAndFirstUserName(firstUserName,secondUserName);
        if (chat1.isEmpty()&&chat2.isEmpty()){
            throw new ChatNotFoundException();
        }else if(chat1.isEmpty()){
            return chat2;
        }
        else {
            return chat1;
        }
    }

    @Override
    public Chat addMessage(Message add, int chatId) throws ChatNotFoundException {
        Optional<Chat> chat=chatRepository.findById(chatId);
        Chat content=chat.get();
        if (content.getMessageList()==null){
            List<Message> msg=new ArrayList<>();
            msg.add(add);
            content.setMessageList(msg);
            return chatRepository.save(content);
        }else {
            List<Message> messages=content.getMessageList();
            messages.add(add);
            content.setMessageList(messages);
            return chatRepository.save(content);
        }
    }
}
