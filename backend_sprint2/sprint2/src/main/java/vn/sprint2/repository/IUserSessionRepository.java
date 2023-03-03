package vn.sprint2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.sprint2.model.chatbot.UserSession;

public interface IUserSessionRepository extends MongoRepository<UserSession,String> {
}
