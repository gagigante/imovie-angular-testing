import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
