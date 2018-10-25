import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class ErrorInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                alert(err.error.message);
                location.reload(true);
            }      
            if (err.status === 400) {
                // auto logout if 400 response returned from api
                console.log(err.error);
                alert(err.error.message);
            }  
            if (err.status === 500) {
                // auto logout if 500 response returned from api
                console.log(err.error);
                alert(err.error.message);
            }  
            
            return throwError("error");
        }));
    }
}