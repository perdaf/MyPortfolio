import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { WorkitemComponent } from './my-works/workitem/workitem.component';

import { ApidataService } from './services/api/apidata.service';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        AboutComponent,
        MyWorksComponent,
        ContactComponent,
        Page404Component,
        WorkitemComponent,
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [ApidataService],
    bootstrap: [AppComponent],
})
export class AppModule {}
