import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './../service/auth.service';
import { AuthTokenService } from './../service/auth-token.service';
import { Utils } from './../utils/utils'


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private authToken: AuthTokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = this.authToken.getuserToken();

        if (authToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authToken}`
                }
            });
        }



        return next.handle(request).pipe(
            catchError(err => {

                if ([401, 403].includes(err.status)) {
                    if (err.status === 403) {
                        Utils.alertMessage("You are not authorized to access..!", "error");
                        this.authService.logout()
                    }
                }

                if ([400].includes(err.status)) {
                    if (err.status === 400) {
                        console.log("400 error received from serve", "error");
                    }
                }


                const error = err.error.message || err.statusText;
                return throwError(err);
            }))
    }
}