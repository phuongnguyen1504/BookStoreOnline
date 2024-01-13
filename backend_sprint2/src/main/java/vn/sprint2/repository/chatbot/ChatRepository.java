package vn.sprint2.repository.chatbot;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.chatbot.Chat;

import java.util.HashSet;
@Repository
public interface ChatRepository extends MongoRepository<Chat,Integer> {
    HashSet<Chat> getChatByFirstUserName(String username);
    HashSet<Chat> getChatBySecondUserName(String username);
    HashSet<Chat> getChatByFirstUserNameAndSecondUserName(String firstUserName, String secondUsername);
    HashSet<Chat> getChatBySecondUserNameAndFirstUserName(String firstUserName, String secondUserName);
}
