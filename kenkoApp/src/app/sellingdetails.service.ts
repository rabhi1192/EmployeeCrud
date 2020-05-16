import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SellingDetails } from './sellingdetails';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class Sellingdetails {
  private sellingDetailsUrl = 'http://localhost:8081/api/sellingdetails';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getSellingDetails (): Observable<SellingDetails[]> {
    return this.http.get<SellingDetails[]>(this.sellingDetailsUrl)
  }

  getSellingDetail(id: string): Observable<SellingDetails> {
    const url = `${this.sellingDetailsUrl}/${id}`;
    return this.http.get<SellingDetails>(url);
  }

  addSellingDetails (sellingDetails: SellingDetails): Observable<SellingDetails> {
    return this.http.post<SellingDetails>(this.sellingDetailsUrl, sellingDetails, httpOptions);
  }

  deleteSellingDetails (sellingDetails: SellingDetails | string): Observable<SellingDetails> {
    const id = typeof sellingDetails === 'string' ? sellingDetails : sellingDetails._id;
    const url = `${this.sellingDetailsUrl}/${id}`;

    return this.http.delete<SellingDetails>(url, httpOptions);
  }

  updateSellingDetails (sellingDetails: SellingDetails): Observable<any> {
    return this.http.put(this.sellingDetailsUrl, sellingDetails, httpOptions);
  }

}
