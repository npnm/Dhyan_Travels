import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItemsComponent } from './components/menuItems';
import { AppRouteConfig, AppRouteComponents } from './components/routeConfig'
import { AppComponent } from './app';
import { APIService } from './api/services';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule, BrowserModule, ReactiveFormsModule, AppRouteConfig],
  declarations: [AppComponent, AppRouteComponents],
  bootstrap: [AppComponent],
  providers: [APIService]
})
export class AppModule { }
