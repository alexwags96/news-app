import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  constructor(private http: HttpClient) {}
  getData(key: string, number: string) {
    const api_url =
      'https://newsapi.org/v2/everything?q=' +
      key +
      '&sortBy=publishedAt&apiKey=8598c6a2558244e0bb79172ab622e52c&language=fr&pageSize=' +
      number;

    return this.http.get(api_url);
  }
}
