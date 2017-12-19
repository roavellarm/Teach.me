// import { Component, OnInit } from '@angular/core';
// import { UserService } from './../user.service';
// import { User } from './../user';
// import { GenderService } from "../../gender/gender.service";

// @Component({
//   selector: 'app-profile-user',
//   templateUrl: './profile-user.component.html'
// })
// export class ProfileUserComponent implements OnInit {
//   title = "Perfil de usuário";
//   users: User[]=[];

//   constructor(
//     private service:UserService,
//     private genderService:GenderService
//   ) { }

//   ngOnInit() {
//     this.updateUserList();
//   }

//   delete(user: User){
//     this.service.delete(user).subscribe(
//       (user2: User) => { this.updateUserList(); },
//       error => { console.log(error); } 
//     );
//   }

//   updateUserList() {
//     this.service.getAll().subscribe(
//       userList => { this.users = userList; },
//       error => { console.log(error);}
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';
import { GenderService } from "../../gender/gender.service";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html'
})
export class ProfileUserComponent implements OnInit {
  title = "Perfil de usuário";
  users: User[]=[];

  constructor(
    private service:UserService,
    private genderService:GenderService
  ) { }

  ngOnInit() {
    this.updateUserList();
  }

  delete(user: User){
    this.service.delete(user).subscribe(
      (user2: User) => { this.updateUserList(); },
      error => { console.log(error); } 
    );
  }

  updateUserList() {
    this.service.getAll().subscribe(
      userList => { this.users = userList; },
      error => { console.log(error);}
    );
  }
}

