import {Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";


@Injectable()
export class PersonsService  {
  private endpointUri = '/pedValue';
  protected _baseUrl: string;
  protected _http: Http = null;
  constructor(
    @Inject(Http) http: Http
  ) {
    this._http = http;
    this._baseUrl = "http://dev.api.fooddocs.ee";
    
  }


  public getPersonsList(){
    const url = `${this._baseUrl}/testtask`;

    return this.doGetRequest(url)
    .map((res: Response) => {
      const items = res.json();
      return items;
    })
    .catch((error: Response | any) => {
      return Observable.throw(error);
    });

  }

  public doGetRequest(url): any {
    return this._http.get(url);
}
}