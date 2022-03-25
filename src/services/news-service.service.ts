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
      '&sortBy=publishedAt&apiKey=51aff4e91f004a3887dc8d52120cdb37&language=fr&pageSize=' +
      number;

    return this.http.get(api_url);
  }
}
