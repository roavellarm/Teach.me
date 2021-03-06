import { Injectable } from '@angular/core';
import { Gender } from './gender';
import { Http,  Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GenderService {
  genders: Gender[] = [];
  uri = "http://localhost:3000/gender";
  
  constructor(private http: Http) {}

  getAll(): Observable<Gender[]> {
    return this.http.get(this.uri)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  get(_id: string): Observable<Gender> {
    let url = this.uri + "/" + _id;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  post(gender: Gender): Observable<Gender> {
    let bodyString = JSON.stringify(gender);
    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header });
    return this.http.post(this.uri, bodyString, options)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

  put(gender: Gender): Observable<Gender> {
    let url = this.uri + "/" + gender._id;
    let bodyString = JSON.stringify(gender);
    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header });
    return this.http.put(url, bodyString, options)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

  delete(gender: Gender): Observable<Gender> {
    let url = this.uri + "/" + gender._id;
    return this.http.delete(url)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

}
