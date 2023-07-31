import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SigninComponent} from "./components/signin/signin.component";
import {FriendsComponent} from "./components/friends/friends.component";
import {ShowComponent} from "./components/show/show.component";
import {HelpComponent} from "./components/help/help.component";
import {ShopComponent} from "./components/shop/shop.component";
import {LibraryComponent} from "./components/library/library.component";
import {CommunityComponent} from "./components/community/community.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {DownloadManagementComponent} from "./components/download-management/download-management.component";
import {ChatComponent} from "./components/chat/chat.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signin", component:  SigninComponent },
  { path: "show", component: ShowComponent },
  { path: "friends", component: FriendsComponent },
  { path: "help", component: HelpComponent },
  { path: "shop", component: ShopComponent },
  { path: "library", component: LibraryComponent },
  { path: "community", component: CommunityComponent },
  { path: "profile", component: ProfileComponent },
  { path: "add_product", component: AddProductComponent },
  { path: "download_management", component: DownloadManagementComponent },
  { path: "chat", component: ChatComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
