import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  BASE_URL = "https://reqres.in/api";

  getUsers() {
    return this.http.get(`${this.BASE_URL}/users?page=1`).pipe(
      tap(
        data => { },
        error => { console.log("Error Service" + error) }
      ));
  }

  getUser(id: number) {
    return this.http.get(`${this.BASE_URL}/users/${id}`).pipe(
      tap(
        data => { },
        error => { console.log("Error Service" + error) }
      ));
  }

  updateUser(formData: any, userId: string) {
    return this.http.put<any>(`${this.BASE_URL}/users/${userId}`, formData)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  deleteUser(userId: string) {
    return this.http.delete<any>(`${this.BASE_URL}/users/${userId}`)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

}
