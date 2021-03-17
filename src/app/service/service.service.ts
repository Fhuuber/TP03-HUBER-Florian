import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = environment.backendProduct;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  get(id: string): Observable<Product> {
    return this.http.get<any>(this.url + '/' + id);
  }
}