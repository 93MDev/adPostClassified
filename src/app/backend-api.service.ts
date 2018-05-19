import { Injectable } from '@angular/core';
import { Http,URLSearchParams,Headers,RequestOptions,Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Config } from './config'; 
import {Observable} from 'rxjs/Observable';

import { Message } from './models/message';

@Injectable()
export class BackendApiService {

  constructor(private http:Http, private _backendService:BackendApiService) { }

  	/*
 	* Get welcome message
 	*/
 	getWelcomeMessage(): Promise<Message> {
 		alert();
        return this.http.get(Config.getHostUrl()+'admin/api/welcome')
          .toPromise()
	      .then(response=>response.json() as Message);
    }

}
