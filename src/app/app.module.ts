import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginButtonComponent} from './login-button/login-button.component';
import { HomeComponent } from './home/home.component';
import { AboutButtonComponent } from './about-button/about-button.component';
import { LoginComponent } from './login/login.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SectionToolsComponent } from './section-tools/section-tools.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { AboutComponent } from './about/about.component';
import { SectionEducationComponent } from './section-education/section-education.component';
import { SectionExperienceComponent } from './section-experience/section-experience.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutButtonComponent,
    ToolbarComponent,
    LoginButtonComponent,
    LoginComponent,
    Pagina404Component,
    SectionToolsComponent,
    SectionContactComponent,
    AboutComponent,
    SectionEducationComponent,
    SectionExperienceComponent,
    SectionProjectsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }