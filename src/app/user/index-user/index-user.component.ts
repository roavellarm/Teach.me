import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.scss']
})
export class IndexUserComponent implements OnInit {
  title = "Lista de usuários";
  users: User[]=[];

  constructor(private service:UserService) { }

  ngOnInit() {
    this.users = this.service.getAll();
  }

  delete(user:User){
    this.service.delete(user);
  }
}
