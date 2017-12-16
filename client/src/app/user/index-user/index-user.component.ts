import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';
import { GenderService } from "../../gender/gender.service";

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html'
})
export class IndexUserComponent implements OnInit {
  title = "Lista de usuários";
  users: User[]=[];

  constructor(
    private service:UserService,
    private genderService:GenderService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      userList => { this.users = userList; },
      error => { console.log(error);}
    );
  }

  delete(user:User){
    this.service.delete(user).subscribe(
      
    );
  }
}
