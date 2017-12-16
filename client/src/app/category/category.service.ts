import { Injectable } from '@angular/core';
import { Category } from './category';
import { Http,  Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {
  categories: Category[] = [];
  uri = "http://localhost:3000/category";

  constructor(private http: Http) { }

  getAll(): Observable<Category[]> {
    return this.http.get(this.uri)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  get(id: number) {
    let url = this.uri + "/" + id;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  post(category: Category): Observable<Category> {
    let bodyString = JSON.stringify(category);
    let cabecalho = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: cabecalho });
    
    return this.http.post(this.uri, bodyString, options)
      .map((res: Response) => { })
      .catch((error: any) => Observable.throw(error));
  }

  put(id: number, category: Category) {
    let bodyString = JSON.stringify(category);
    let cabecalho = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: cabecalho });

    return this.http.post(this.uri + "/" + id, bodyString, options)
      .map((res: Response) => { })
      .catch((error: any) => Observable.throw(error));
  }

  delete(category: Category) {
    let url = this.uri + "/" + category.id;
    return this.http.delete(url)
      .map((res: Response) => { })
      .catch((error: any) => Observable.throw(error));
  }

}
