import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './core/app-service/app.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private appService: AppService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set(
        'X-TOKEN',
        this.appService.getIonosApiKey() as string
      ),
    });

    return next.handle(req);
  }
}
