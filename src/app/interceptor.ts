import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {TokenStorage} from './tokenStorage';
import 'rxjs/add/operator/do';
import {AlertService} from "./services/alert.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorage,
              private router: Router, private alertService: AlertService
              ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let authReq = req;
    if (this.tokenStorage.getToken() != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.tokenStorage.getToken())});
    }
    return next.handle(authReq).do((event: HttpEvent<any>) => {
      console.log(authReq);

    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log(err.message);
          this.tokenStorage.signOut();
          this.router.navigate(['/login']);
      }
    });
  }

}
