import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService} from "../../../service/chatbot/chat.service";
import {UserService} from "../../../service/chatbot/user.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../service/token-storage.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Chat} from "../../../model/chatbot/chat";
import {Message} from "../../../model/chatbot/message";
import {interval} from "rxjs";

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  firstUserName = this.tokenStorageService.getUser().username;
  roles = this.tokenStorageService.getUser().roles[0].name;
  chatForm: FormGroup;
  messageObj: Message = new Message();
  chatId: any = 0;
  chatObj: Chat = new Chat();
  chatData: any = [];
  public messageList: any = [];
  secondUserName = "";
  intervals:any;
  constructor(private chatService: ChatService, private userService: UserService, private route: Router, private tokenStorageService: TokenStorageService) {


  }

  @ViewChild('chatListContainer') list?: ElementRef<HTMLDivElement>;
  formChat: boolean = false;
  chatInputMessage: string = "";
  human = {
    id: 1,
    profileImageUrl: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
  }


  ngOnInit() {

    this.intervals= setInterval(() => {
        this.chatService.getChatById(sessionStorage.getItem('chatId')).subscribe(data => {
          this.chatData = data;
          this.messageList = this.chatData.messageList;
          this.secondUserName = this.chatData.secondUserName;
          this.firstUserName = this.chatData.firstUserName;
        });
      }, 1000);
    clearInterval(this.intervals);
  };

  bot = {
    id: 2,
    profileImageUrl: 'https://media.istockphoto.com/photos/3d-illustration-of-virtual-human-on-technology-background-picture-id1181533674?s=612x612'
  }

  chatMessages: {
    user: any,
    message: string
  }[] = [
    {
      user: this.bot,
      message: "hi, I'm an AI. You can start any conversation..."
    },
  ];

  title = 'frontend';


  sendMessage() {
    //Push tin nhắn mới vào mongodb
    this.messageObj.replyMessage = this.chatInputMessage;
    this.messageObj.senderEmail = this.firstUserName;
    this.chatService.updateChat(this.messageObj, this.chatId).subscribe(data => {
      console.log(data);
      this.chatInputMessage = "";
    })
    // Lấy danh sách tin nhắn theo chatId
    this.chatService.getChatById(this.chatId).subscribe(data => {
      console.log(data);
      this.chatData = data;
      this.messageList = this.chatData.messageList;
      this.secondUserName = this.chatData.secondUserName;
      this.firstUserName = this.chatData.firstUserName;

    })
  }
  routeX() {
    // this.router.navigateByUrl('/navbar/recommendation-service');
    sessionStorage.clear();
    // window.location.reload();
    this.route.navigateByUrl('');
  }

  routeHome() {
    this.route.navigateByUrl('');
  }

  openForm() {
    this.formChat = !this.formChat;
    if (this.formChat == true) {
      if (this.roles != "ADMIN") {
        this.intervals= setInterval(() => {
          this.chatService.getChatById(sessionStorage.getItem('chatId')).subscribe(data => {
            this.chatData = data;
            this.messageList = this.chatData.messageList;
            this.secondUserName = this.chatData.secondUserName;
            this.firstUserName = this.chatData.firstUserName;
          });
        }, 1000);
        this.chatService.getChatByFirstUserNameAndSecondUserName("phuong123@gmail.com", this.firstUserName).subscribe(data => {
            console.log(data);
            this.chatId = data[0].chatId;
            sessionStorage.setItem("chatId", this.chatId);
            sessionStorage.setItem("gotochat", "false");
          }, error => {
            this.chatObj.firstUserName = this.firstUserName;
            this.chatObj.secondUserName = "phuong123@gmail.com";
            this.chatService.createChatRoom(this.chatObj).subscribe(
              (data) => {
                console.log("error:" + data);
                this.chatData = data;
                this.chatId = this.chatData.chatId;
                sessionStorage.setItem("chatId", this.chatData.chatId);

                sessionStorage.setItem("gotochat", "false");
              })
          }
        )

      } else {
        this.chatService.getChatByFirstUserNameOrSecondUserName(this.firstUserName).subscribe(data=>{
          console.log(data);
          this.chatId = data[0].chatId;
          sessionStorage.setItem("chatId", this.chatId);
          sessionStorage.setItem("gotochat", "false");
        })
        this.formChat=false;
        this.route.navigateByUrl('/chat');
      }
    }
    else {
      clearInterval(this.intervals);

    }
  }


}
