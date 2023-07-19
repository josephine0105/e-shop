import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  LoginPost: string;
  constructor(public http: HttpClient) {
    this.LoginPost=environment.authEndpoint
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.LoginPost, data);
  }
}
