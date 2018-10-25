import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                headers: request.headers.set('Authorization', currentUser.token )
                              
            });
        }
        request = request.clone({
            headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
                          
        });

        return next.handle(request);
    }
}