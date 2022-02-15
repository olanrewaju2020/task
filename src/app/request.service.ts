import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private _url: string = ""
  constructor(private http: HttpClient) { }
}
