import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/services/news-service.service';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.scss'],
})
export class IaComponent implements OnInit {
  articles: any;
  maxArticle = '30';
  selectedRam: any;
  filter = 'intelligence artificielle';
  loading: boolean = true;
  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.filter = 'intelligence artificielle';
    this.getAllNews(this.maxArticle, this.filter);
  }
  nombreDeCard(e: Event) {
    this.selectedRam = (e.target as HTMLInputElement).value;
    this.getAllNews(this.selectedRam, this.filter);
  }
  Filter(key: string) {
    this.filter = key;
    this.getAllNews(this.selectedRam, this.filter);
  }
  getAllNews(numArticle: string, filter: string) {
    this.loading;
    this.newsService.getData(filter, numArticle).subscribe((data: any) => {
      console.log(data.articles);
      this.articles = data.articles;
      this.loading = false;
    });
  }

  openArticle(link: string) {
    window.open(link);
  }
}
