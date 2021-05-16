import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { CardMiniComponent } from './components/card-mini/card-mini.component';

@NgModule({
  declarations: [DashboardComponent, MenuComponent, SectionComponent, CardComponent, MovieDetailsComponent, WatchListComponent, CardMiniComponent],
  imports: [
    CommonModule,
    MatIconModule,
    IvyCarouselModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
