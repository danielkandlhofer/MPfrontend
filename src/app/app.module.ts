//imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {rootRouting} from "./app.router";
// components
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import {MessageList} from "./components/message-list.component";
import {NavBar} from "./components/nav-bar.component";
import {Register} from "./components/register.component";
import {Login} from "./components/login.component";
import {UserMessages} from "./components/usermessages.component";
import {AddMessage} from "./components/add-message.component";
import {MessageComments} from "./components/message-comments.component";
import {MessageDetail} from "./components/message-detail.component";
import {MessageEdit} from "./components/message-edit.component";

//services
import {MessageService} from "./services/message.service";
import {RegisterService} from "./services/register.service";
import {LoginService} from "./services/login.service";
import {UserService} from "./services/user.service";
import {AddMessageService} from "./services/add-message.service";
import {CommentService} from "./services/comment.service";
import {LikesPipe} from "./shared/pipes/likes.pipe";
import {UserDetails} from "./components/user-detail.component";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageList,
    NavBar,
    Register,
    Login,
    UserMessages,
    UserDetails,
    AddMessage,
    MessageComments,
    MessageDetail,
    MessageEdit,
    LikesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting
  ],
  providers: [
    MessageService,
    RegisterService,
    LoginService,
    UserService,
    AddMessageService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
