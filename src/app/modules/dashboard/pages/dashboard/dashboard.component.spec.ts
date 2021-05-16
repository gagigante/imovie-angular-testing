import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from '../../components/menu/menu.component';
import { DashboardRoutingModule } from '../../dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardRoutingModule],
      declarations: [ DashboardComponent, MenuComponent,  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
