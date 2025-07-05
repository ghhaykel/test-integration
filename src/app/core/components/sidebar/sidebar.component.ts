import { Component , HostListener } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from './menu-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed$ = this.layoutService.sidebarCollapsed$;
  menuItems: MenuItem[] = this.menuService.getMenuItems();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  

  private checkScreenSize() {
    if (window.innerWidth < 992) {
      this.layoutService.setSidebarState(true);
    } else {
      this.layoutService.setSidebarState(false);
    }
  }
  
 isItemActive(item: MenuItem): boolean {
  if (item.link && this.router.isActive(item.link, false)) {
    return true;
  }
  
  return item.subItems.some(subItem => 
    this.router.isActive(subItem.link, false)
  );
}
  

  constructor(private menuService: MenuService,private layoutService: LayoutService,private router: Router) {
    this.checkScreenSize();
  }
}
