import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';
import { SexService } from "../../sex/sex.service";

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html'
})
export class IndexUserComponent implements OnInit {
  title = "Lista de usuários";
  users: User[]=[];

  constructor(
    private service:UserService,
    private sexService:SexService
  ) { }

  ngOnInit() {
    this.users = this.service.getAll();
  }

  delete(user:User){
    this.service.delete(user);
  }
}
