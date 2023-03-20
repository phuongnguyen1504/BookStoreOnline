import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../model/chatbot/message";
import {Chat} from "../../model/chatbot/chat";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl="http://store.ap-southeast-1.elasticbeanstalk.com/chats";
  constructor(private httpClient:HttpClient) {

  }
  updateChat(message: Message, chatId: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl + "/message/" + `${chatId}`, message);
  }
  getChatById(chatId: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/" + chatId);
  }
  createChatRoom(chat: Chat): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "/add", chat);
  }
  getChatByFirstUserNameAndSecondUserName(firstUserName: String, secondUserName: String) {
    return this.httpClient.get<Chat>(this.baseUrl + "/getChatByFirstUserNameAndSecondUserName" + '?firstUserName=' + firstUserName + '&secondUserName=' + secondUserName);
  }
  getChatByFirstUserNameOrSecondUserName(username: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/getChatByFirstUserNameOrSecondUserName/" + username);
  }
  // private url: string;
  // constructor(private http: HttpClient) {
  //   this.url = `http://localhost:8080/api/chatbot/${localStorage.getItem('fakeUserId')}`;
  // }
  // public send(message: string): Observable<string> {
  //   return this.http.put<string>(this.url, message);
  // }
  //
  // public findAll() {
  //   return this.http.get<any>(this.url);
  // }
  //
  // public deleteConversation() {
  //   this.http.delete(this.url).subscribe(data => {
  //   });
  // }
}
