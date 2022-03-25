import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/services/news-service.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent implements OnInit {
  articles: any;

  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.getAllNews();
  }
  getAllNews() {
    this.newsService.getData('general', '20').subscribe((data: any) => {
      console.log(data.articles);
      this.articles = data.articles;
    });
  }
}
