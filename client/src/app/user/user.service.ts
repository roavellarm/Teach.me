import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  users: User[] = [];
  uri = "http://localhost:3000/user";

  constructor(private http: Http) { }

  getStudents() {
    this.refreshUserList();
    return this.users.filter(user => user.userType == true);
  }

  getInstructors() {
    this.refreshUserList();
    return this.users.filter(user => user.userType == false);
  }

  getAll(): Observable<User[]> {
    return this.http.get(this.uri)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  get(id: number): Observable<User> {
    let url = this.uri + "/" + id;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  getByEmail(email: string) {
    this.refreshUserList();
    return this.users.find(user => user.email == email);
  }

  post(user: User): Observable<User> {
    let bodyString = JSON.stringify(user);
    let cabecalho = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: cabecalho });

    return this.http.post(this.uri, bodyString, options)
      .map((res: Response) => { })
      .catch((error: any) => Observable.throw(error));
  }

  put(id: number, user: User) {
    let bodyString = JSON.stringify(user);
    let cabecalho = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: cabecalho });

    return this.http.post(this.uri + "/" + id, bodyString, options)
      .map((res: Response) => { })
      .catch((error: any) => Observable.throw(error));
  }

  delete(user: User): Observable<User> {
    let url = this.uri + "/" + user.id;
    return this.http.delete(url)
      .map((res: Response) => { })
      .catch((error: any) => Observable.throw(error));
  }

  private refreshUserList(){
    this.getAll().subscribe(
      (users: User[]) => { this.users = users; },
      error => { console.log(error); }
    );
  }

}
