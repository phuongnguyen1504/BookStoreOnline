package vn.sprint2.model.chatbot;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Document("usersession")
public class UserSession {
    @Id
    private String id;
    private List<String> conversation;

    public UserSession(String id, List conversation) {
        this.id = id;
        this.conversation = conversation;
    }

    public void updateConversation(String newEntry) {
        this.conversation.add(newEntry);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<String> getConversation() {
        return conversation;
    }

    public void setConversation(List<String> conversation) {
        this.conversation = conversation;
    }
}
