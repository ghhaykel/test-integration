import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { EmployeeCardComponent } from './shared/components/employee-card/employee-card.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeInfosComponent } from './shared/components/employee-infos/employee-infos.component';
import { AvatarGroupComponent } from './shared/components/avatar-group/avatar-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    EmployeeCardComponent,
    EmployeesComponent,
    EmployeeInfosComponent,
    AvatarGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
