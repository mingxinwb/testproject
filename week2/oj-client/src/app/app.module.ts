import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
