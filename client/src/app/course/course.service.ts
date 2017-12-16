import { Injectable } from '@angular/core';
import { Course } from "./course";
import { User } from './../user/user';
import { UserService } from '../user/user.service';
import { Category } from './../category/category';
import { CategoryService } from './../category/category.service';
import { Http,  Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CourseService {
  courses: Course[] = [];
  uri = "http://localhost:3000/course";

  constructor(private http: Http) {}

  getAll(): Observable<Course[]> {
    return this.http.get(this.uri)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  get(id: number): Observable<Course> {
    let url = this.uri + '/' + id;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  post(course: Course): Observable<Course> {
    let bodyString = JSON.stringify(course);
    let header = new Headers({ "Content-Type": "application/json"});
    let options = new RequestOptions({ headers: header });

    return this.http.post(this.uri, bodyString, options)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

  put(course: Course): Observable<Course> {
    let url = this.uri + "/" + course.id;
    let bodyString = JSON.stringify(course);
    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header });

    return this.http.put(url, bodyString, options)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

  delete(course: Course): Observable<Course> {
    let url = this.uri + "/" + course.id;
    return this.http.delete(url)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

}
