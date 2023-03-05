package vn.sprint2.service.chatbot;

import vn.sprint2.exceptions.chatbot.UserAlreadyExistException;
import vn.sprint2.exceptions.chatbot.UserNotFoundException;
import vn.sprint2.model.chatbot.UserSession;

import java.util.List;

public interface IUserService {
    List<UserSession> getAll() throws UserNotFoundException;

    UserSession addUser(UserSession userSession) throws UserAlreadyExistException;

    UserSession getUserByUserName(String username)  throws UserNotFoundException;
}
