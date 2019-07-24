import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { CalendarComponent } from './calendar/calendar.component';
import { SchedulerServiceService } from './_services/schedulerService.service';
import { AlertifyService } from './_services/alertify.service';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      CalendarComponent
   ],
   imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [
    AuthService,
    SchedulerServiceService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
