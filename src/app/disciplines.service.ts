import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()
export class DisciplinesService {

  constructor(private http: Http) { }

  private _allDisciplines = 'http://openedu.urfu.ru:33011/api/v1/disciplines';
  
  getAllDisciplines() {
    return this.http.get(this._allDisciplines + '/?format=json')
      .map(res => <any>res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    //in a real world app, we may send the error to some remote logging infrastructure
    //instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
