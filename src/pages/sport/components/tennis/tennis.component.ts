import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/services/news-service.service';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.scss'],
})
export class TennisComponent implements OnInit {
  articles: any;
  maxArticle = '30';
  selectedRam: any;
  filter = 'tennis';
  loading: boolean = true;
  ligues = [
    {
      key: 'Champions League',
      value: 'FOOT-C1',
    },
    {
      key: 'Premier League',
      value: 'FOOT-ANG',
    },
    {
      key: 'Liga',
      value: 'FOOT-ESP',
    },
    {
      key: 'Ligue 1',
      value: 'FOOT-L1',
    },
    {
      key: 'Serie A',
      value: 'FOOT-ITA',
    },
    {
      key: 'Bundesliga',
      value: 'FOOT-ALL',
    },
  ];
  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.filter = 'tennis';
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
