package vn.sprint2.model.chatbot;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Document(collection = "users")
public class UserSession {
    @Id
    private String userName;

    public UserSession() {
    }

    public UserSession(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
