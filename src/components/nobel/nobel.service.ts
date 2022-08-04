import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nobel } from './nobelModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NobelService {

  private URL:string = "https://api.nobelprize.org/v1/prize.json?"

  GetNobel() : Observable<Nobel> {
    return this.httpService.get<Nobel>(this.URL);
  }

  constructor(private httpService:HttpClient) { }
}
