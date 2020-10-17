import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../mixins/api-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromisetestService extends APIService {

  public url = '/case/long/test/'

  constructor(private http: HttpClient) {
    super();
  }

  getLazyLoadedValue(): Observable<any> {
    return this.http.get<any>(this.putDomain(this.url));
  }
}
