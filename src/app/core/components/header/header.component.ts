import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private layoutService: LayoutService) {}

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
