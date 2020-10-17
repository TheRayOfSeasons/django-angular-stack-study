import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Case } from '../serializers/case';
import { APIService } from '../mixins/api-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/** A service that interacts with the cases table in the back-end. */
export class CasesService extends APIService {

  public url: string = '/api/v1/cases/';

  constructor(private http: HttpClient) {
    super();
  }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(this.putDomain(this.url));
  }

  getCase(id: number): Observable<Case> {
    return this.http.get<Case>(this.putDomain(this.url) + id.toString() + '/');
  }
}
