import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Lab } from './lab';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class LabService {

//Change here
  private labsUrl = 'http://localhost:9080/api/v4/projects'  // URL to web api

  constructor(
    private http: HttpClient) { }

  /*Gets JSON from Gitlab*/
  getLabs(): Observable<Lab[]> {
    return this.http.get<Lab[]>(this.labsUrl + '?private_token=unvou3c3E_Vgb8QA9cfA') //Change here
      .pipe(
        catchError(this.handleError('getLabs', []))
      );
  }

  /** GET lab by id. Will 404 if id not found */
  getLab(id: number): Observable<Lab> {
    const url = `${this.labsUrl}/${id}` + '?private_token=unvou3c3E_Vgb8QA9cfA'; //Change here
    return this.http.get<Lab>(url).pipe(
      catchError(this.handleError<Lab>(`getLab id=${id}`))
    );
  }

  /** GET lab by id. Return `undefined` when id not found */
  getLabNo404<Data>(id: number): Observable<Lab> {
    const url = `${this.labsUrl}/?id=${id}` + '?private_token=unvou3c3E_Vgb8QA9cfA'; //Change here
    return this.http.get<Lab[]>(url)
      .pipe(
        map(labs => labs[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`        }),
        catchError(this.handleError<Lab>(`getLab id=${id}`))
      );
  }



  /* GET labs whose name contains search term */
  searchLabs(term: string): Observable<Lab[]> {
    if (!term.trim()) {
      // if not search term, return empty lab array.
      return of([]);
    } //Change here
    return this.http.get<Lab[]>(`${this.labsUrl}/?name=${term}+ '?private_token=unvou3c3E_Vgb8QA9cfA'`).pipe( 
      catchError(this.handleError<Lab[]>('searchLabs', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}