import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItemsComponent } from './Components/MenuItems';
import { AppRouteConfig, AppRouteComponents } from './Components/RouteConfig'
import { AppComponent } from './App';
import { APIService } from './Api/Services';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule, BrowserModule, ReactiveFormsModule, AppRouteConfig],
  declarations: [AppComponent, AppRouteComponents],
  bootstrap: [AppComponent],
  providers: [APIService]
})
export class AppModule { }
