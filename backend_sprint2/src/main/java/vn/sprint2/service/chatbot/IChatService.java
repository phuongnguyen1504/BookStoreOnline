package vn.sprint2.service.chatbot;

import vn.sprint2.exceptions.chatbot.ChatAlreadyExistException;
import vn.sprint2.exceptions.chatbot.ChatNotFoundException;
import vn.sprint2.exceptions.chatbot.NoChatExistsInTheRepository;
import vn.sprint2.model.chatbot.Chat;
import vn.sprint2.model.chatbot.Message;

import java.util.HashSet;
import java.util.List;

public interface IChatService {
    public Chat addChat(Chat chat) throws ChatAlreadyExistException;
    List<Chat> findAllchats() throws NoChatExistsInTheRepository;
    Chat getById(int id)  throws ChatNotFoundException;
    HashSet<Chat> getChatByFirstUserName(String username)  throws ChatNotFoundException;

    HashSet<Chat> getChatBySecondUserName(String username)  throws ChatNotFoundException;

    HashSet<Chat> getChatByFirstUserNameOrSecondUserName(String username)  throws ChatNotFoundException;

    HashSet<Chat> getChatByFirstUserNameAndSecondUserName(String firstUserName, String secondUserName)  throws ChatNotFoundException;

    Chat addMessage(Message add, int chatId)  throws ChatNotFoundException;
}
