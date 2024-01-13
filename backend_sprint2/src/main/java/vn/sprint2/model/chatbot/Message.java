package vn.sprint2.model.chatbot;

import java.util.Date;

public class Message {
    private String senderEmail;
    private Date time=new Date(System.currentTimeMillis());
    private String replyMessage;

    public Message() {
    }

    public Message(String senderEmail, Date time, String replyMessage) {
        this.senderEmail = senderEmail;
        this.time = time;
        this.replyMessage = replyMessage;
    }

    public String getSenderEmail() {
        return senderEmail;
    }

    public void setSenderEmail(String senderEmail) {
        this.senderEmail = senderEmail;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getReplyMessage() {
        return replyMessage;
    }

    public void setReplyMessage(String replyMessage) {
        this.replyMessage = replyMessage;
    }
}
