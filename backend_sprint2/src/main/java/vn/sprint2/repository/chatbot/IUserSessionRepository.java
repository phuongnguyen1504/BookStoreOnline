package vn.sprint2.repository.chatbot;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.chatbot.UserSession;
@Repository
public interface IUserSessionRepository extends MongoRepository<UserSession,String> {
}
