import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WebsocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
