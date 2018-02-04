import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  text: String;
  message: String;
  time: Number;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
      this.message = msg.text;
      this.time = msg.time;
    });
  }
  sendMessage() {
    this.chat.sendMsg(this.text);
  }
}
