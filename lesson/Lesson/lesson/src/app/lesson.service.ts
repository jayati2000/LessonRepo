import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8081/Auth";




  // public get<T>(urlParam: string): Observable<T> {
  //   return this.httpClient.get<T>(this.baseURL + '/' + urlParam);
  // }


  public add<T>(urlParam: string, data: any): Observable<T> {
    return this.httpClient.post<T>(this.baseURL + '/' + urlParam, data);
  }

  public delete<T>(urlParam: string, data: any): Observable<T> {
    return this.httpClient.post<T>(this.baseURL + '/' + urlParam, data);
  }

  public update<T>(urlParam: string, data: any): Observable<T> {
    return this.httpClient.post<T>(this.baseURL + '/' + urlParam, data);
  }


  public get<T>(urlParam: string, page: number = 0): Observable<T> {
    const params = new HttpParams().set('page', page.toString());
    return this.httpClient.get<T>(`${this.baseURL}/${urlParam}`, { params });
  }


}
