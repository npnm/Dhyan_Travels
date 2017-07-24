import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './App/Module';

enableProdMode(); //only for production
platformBrowserDynamic().bootstrapModule(AppModule);