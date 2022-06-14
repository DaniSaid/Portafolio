import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionToolsComponent } from './components/section-tools/section-tools.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { AboutComponent } from './about/about.component';
import { SectionEducationComponent } from './section-education/section-education.component';
import { SectionExperienceComponent } from './section-experience/section-experience.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { Pagina404Component } from './pagina404/pagina404.component';

import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginButtonComponent} from './login-button/login-button.component';
import { AboutButtonComponent } from './about-button/about-button.component';



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
    SectionMainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgsRevealModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }