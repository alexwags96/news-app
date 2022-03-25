import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss'],
})
export class CustomLayoutComponent implements OnInit {
  SPORTS = [
    {
      key: 'Football',
      route: '/sport/football',
    },
    {
      key: 'Basket',
      route: '/sport/basket',
    },
    {
      key: 'Tennis',
      route: '/sport/tennis',
    },
    {
      key: 'Handball',
      route: '/sport/handball',
    },
  ];
  TECHS = [
    {
      key: 'Intelligence Artificielle',
      route: '/tech/ia',
    },
    {
      key: 'robotique',
      route: '/tech/robotique',
    },
    {
      key: 'innovation',
      route: '/tech/innovation',
    },
    {
      key: 'numerique',
      route: '/tech/numerique',
    },
  ];
  SOCIETES = [
    {
      key: 'Societe',
      route: '/societe/all',
    },
    {
      key: 'Politique',
      route: '/societe/politique',
    },
    {
      key: 'Geopolitique',
      route: '/societe/geopolitique',
    },
    {
      key: 'Sante',
      route: '/societe/sante',
    },
    {
      key: 'Religion',
      route: '/societe/religion',
    },
  ];
  PROFILS = [
    {
      key: 'Mon profil',
      route: '/user/profil',
    },
    {
      key: 'Déconnexion',
      route: '/user/deconnexion',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  MenuRouter(link: string) {
    this.router.navigate([link]);
  }
}
