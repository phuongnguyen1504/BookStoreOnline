package vn.sprint2.service.impl.chatbot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.sprint2.model.chatbot.UserSession;
import vn.sprint2.repository.IUserSessionRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserSessionService {
    @Autowired
    private IUserSessionRepository userSessionRepository;
    public List<UserSession> findAll(){
        return userSessionRepository.findAll();
    }
    public UserSession findById(String id){
        if (!userSessionRepository.findById(id).isPresent()){
            return null;
        }
        return userSessionRepository.findById(id).orElseThrow(UnsupportedOperationException::new);
    }
    public UserSession save(UserSession userSession) {
        return userSessionRepository.save(userSession);
    }

    public void deleteById(String id) {
        userSessionRepository.deleteById(id);
    }
    public void update(String id,String newEntry){
        Optional<UserSession> session=userSessionRepository.findById(id);
        try{
            session.get().updateConversation(newEntry);
            userSessionRepository.deleteById(id);
            userSessionRepository.save(session.get());
        } catch (Exception e) {
            UserSession newSession=new UserSession(id,new ArrayList<>());
            newSession.updateConversation(newEntry);
            userSessionRepository.deleteById(id);
            userSessionRepository.save(newSession);
        }
    }
}
