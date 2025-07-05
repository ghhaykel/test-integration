import { Injectable } from '@angular/core';
import { MenuItem } from '../components/sidebar/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenuItems(): MenuItem[] {
    return [
      {
        title: 'Tableau de bord',
        icon: 'bi-speedometer2',
        link: '/dashboard',
        badge: null,
        subItems: []
      },
      {
        title: 'Employés',
        icon: 'bi-people',
        link: null,
        badge: '46',
        subItems: [
          { title: 'Groupes de travail', link: '/employees/work-groups' },
          { title: 'Badges', link: '/employees/badges' },
          { title: 'Alertes', link: '/employees/alerts' },
          { title: 'Types de contrats', link: '/employees/contract-types' },
          { title: 'Liste des formations', link: '/employees/trainings' },
          { title: 'Jours fériés', link: '/employees/holidays' },
          { title: 'Événements', link: '/employees/events' },
          { title: 'Périodes', link: '/employees/periods' }
        ]
      },
      {
        title: 'Prévisions',
        icon: 'bi-graph-up',
        link: '/forecasts',
        badge: null,
        subItems: []
      },
      {
        title: 'Planning',
        icon: 'bi-calendar-week',
        link: '/scheduling',
        badge: null,
        subItems: []
      },
      {
        title: 'Contrôle des heures',
        icon: 'bi-clock-history',
        link: '/time-tracking',
        badge: null,
        subItems: []
      },
      {
        title: 'Rapports',
        icon: 'bi-file-earmark-text',
        link: '/reports',
        badge: null,
        subItems: []
      },
      {
        title: 'Coffre fort',
        icon: 'bi-safe',
        link: '/safe',
        badge: null,
        subItems: []
      },
      {
        title: 'Restaurant',
        icon: 'bi-cup-hot',
        link: '/restaurant',
        badge: null,
        subItems: []
      }
    ];
  }
  constructor() { }
}
