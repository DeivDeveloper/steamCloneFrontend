import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ShowComponent } from './components/show/show.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HelpComponent } from './components/help/help.component';
import { ShopComponent } from './components/shop/shop.component';
import { LibraryComponent } from './components/library/library.component';
import { CommunityComponent } from './components/community/community.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DownloadManagementComponent } from './components/download-management/download-management.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    ShowComponent,
    FriendsComponent,
    HelpComponent,
    ShopComponent,
    LibraryComponent,
    CommunityComponent,
    ProfileComponent,
    AddProductComponent,
    DownloadManagementComponent,
    ChatComponent,
    HeaderNavComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
