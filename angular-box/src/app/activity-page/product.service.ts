import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = "api/products.json";

  constructor(private http: HttpClient) { }


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))), catchError(this.handleError)
    );   //May need to change 
  }

  private handleError(err: HttpErrorResponse) {
    //potentially sent some error message to logging infrastructure
    let errorMessage = '';
    if (err.error instanceof ErrorEvent){
      //A client-side or netowrk errror occured. Handle accordingly
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    }
    console.error(errorMessage);
    return throwError((errorMessage));

  }
}
