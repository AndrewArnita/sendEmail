import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';

import {HttpClientModule} from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component'
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TeamComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
