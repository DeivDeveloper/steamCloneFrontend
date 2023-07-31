export class UserDTO {
  id:number = 0;
  name:string = "";
  nickname:string = "";
  cellphoneNumber:string = "";
  email:string = "";
  birthday:Date = new Date();
  password:string = "";
  confirmPassword:string = "";
  level:number = 0;
  country:string = "";
  rol:number = 0;
  state:boolean = true;
}
