import { Component } from '@angular/core';
import {UserDTO} from "../../model/user-dto";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userDTO:UserDTO;

  constructor() {
    this.userDTO = new UserDTO();
  }

  public registrar(){
    console.log(`Se registró el usuario con nickname ${this.userDTO.nickname}`);
  }

  public confirmPassword(){
    return this.userDTO.password == this.userDTO.confirmPassword;
  }

}
