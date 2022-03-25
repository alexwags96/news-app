import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/services/news-service.service';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.scss'],
})
export class ReligionComponent implements OnInit {
  articles: any;
  maxArticle = '30';
  selectedRam: any;
  filter = 'religion';
  loading: boolean = true;

  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    // this.filter = 'societe';
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
