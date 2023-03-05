import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService} from "../../../service/chatbot/chat.service";
import {UserService} from "../../../service/chatbot/user.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../service/token-storage.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Chat} from "../../../model/chatbot/chat";
import {Message} from "../../../model/chatbot/message";

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
  interval:any;
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
    this.chatService.getChatById(sessionStorage.getItem('chatId')).subscribe(data => {
      this.chatData = data;
      this.messageList=this.chatData.messageList;
    });
  };
    // if (localStorage.getItem('fakeUserId') === null) {
    //   localStorage.setItem('fakeUserId', this.generateFakeId())
    // } else {
    //   // this.chatService.findAll().subscribe(data => {
    //   //   if (data !== null) {
    //   //     this.setConversation(data['conversation'])
    //   //   }
    //   // });
    // }


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

  ngAfterViewChecked() {

    this.scrollToBottom()
  }

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

    })
  }

  send() {
    this.chatMessages.push({
      message: this.chatInputMessage,
      user: this.human
    });
    // this.chatService.send(this.chatInputMessage).subscribe(data => {
    //   this.receive(data);
    // });
    this.chatInputMessage = ""
    this.scrollToBottom()
  }

  receive(message: string) {
    this.chatMessages.push({
      message: message,
      user: this.bot
    });
    this.scrollToBottom()
  }

  setConversation(conversation: any) {
    for (let i = 0; i < conversation.length; i++) {
      if (i % 2 === 0) {
        this.chatMessages.push({
          message: conversation[i],
          user: this.human
        });
      } else {
        this.chatMessages.push({
          message: conversation[i],
          user: this.bot
        });
      }
    }
  }

  scrollToBottom() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({top: maxScroll, behavior: 'smooth'});
  }

  generateFakeId(): string {
    const current = new Date();
    const timestamp = current.getTime();
    return timestamp.toString()
  }

  clearConversation() {
    localStorage.removeItem('fakeUserId')
    localStorage.setItem('fakeUserId', this.generateFakeId())
    // this.chatService.deleteConversation()
    this.chatMessages = [
      {
        user: this.bot,
        message: "hi, I'm an AI. You can start any conversation..."
      },
    ];
  }

  openForm() {
    this.formChat = !this.formChat;
    if (this.formChat == true) {
      if (this.roles != "ADMIN") {
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
        this.interval=setInterval(() => {
          this.chatService.getChatById(sessionStorage.getItem('chatId')).subscribe(data => {
            this.chatData = data;
            if (this.chatData.messageList.length!=this.messageList.length){
              const arr= this.chatData.messageList.slice(this.messageList.length-1);
              arr.forEach((value)=>{
                this.messageList.push(value);
              })
            }
          });
        }, 1000);
      } else {
        this.route.navigateByUrl('/chat');
      }
    }
    else {
      clearInterval(this.interval);
    }
  }

}
