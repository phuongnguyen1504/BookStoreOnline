package vn.sprint2.service.chatbot.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.sprint2.exceptions.chatbot.UserAlreadyExistException;
import vn.sprint2.exceptions.chatbot.UserNotFoundException;
import vn.sprint2.model.chatbot.UserSession;
import vn.sprint2.repository.chatbot.IUserSessionRepository;
import vn.sprint2.service.chatbot.IUserService;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserSessionRepository userSessionRepository;
    @Override
    public List<UserSession> getAll() throws UserNotFoundException {
        List<UserSession> users=userSessionRepository.findAll();
        if (users.isEmpty()){
            throw new UserNotFoundException();
        }
        else {
            return users;
        }
    }

    @Override
    public UserSession addUser(UserSession userSession) throws UserAlreadyExistException {
        Optional<UserSession> user=userSessionRepository.findById(userSession.getUserName());
        if (user.isPresent()){
            throw new UserAlreadyExistException();
        }
        else {
            return userSessionRepository.save(userSession);
        }
    }

    @Override
    public UserSession getUserByUserName(String username) throws UserNotFoundException {
        Optional<UserSession> user=userSessionRepository.findById(username);
        if (user.isPresent()){
            return user.get();
        }
        else {
            throw new UserNotFoundException();
        }

    }
}
