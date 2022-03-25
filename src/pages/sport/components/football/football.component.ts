import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/services/news-service.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss'],
})
export class FootballComponent implements OnInit {
  articles: any;
  maxArticle = '30';
  selectedRam: any;
  filter = 'foot';
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
    {
      key: 'Football',
      value: 'foot',
    },
  ];
  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    // this.filter;
    this.getAllNews(this.maxArticle, this.filter);
  }
  nombreDeCard(e: Event) {
    this.selectedRam = (e.target as HTMLInputElement).value;
    this.getAllNews(this.selectedRam, this.filter);
  }
  Filter(value: string) {
    this.filter = value;
    this.getAllNews(this.selectedRam, this.filter);
  }
  getAllNews(numArticle: string, filter: string) {
    this.loading;
    this.newsService.getData(filter, numArticle).subscribe((data: any) => {
      // console.log(data.articles);
      this.articles = data.articles;
      this.loading = false;
    });
  }

  openArticle(link: string) {
    window.open(link);
  }
}
