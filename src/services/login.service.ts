import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../models/login.model";
import { map } from 'rxjs/operators';



@Injectable()
export class LoginService{

    constructor(private http: HttpClient ) { }
    

    login(email:string,password :string,vkn:string,phoneNumber:string){
        
            
        return this.http.post<any>('http://localhost:8080/ticari-kurumsal/rest/login', { email,password,vkn,phoneNumber })
        .pipe(map(loginResponse => {
            // login successful if there's a jwt token in the response
            if (loginResponse && loginResponse.data && loginResponse.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(loginResponse.data));
            }

            return loginResponse;
        }));
        
    }

}