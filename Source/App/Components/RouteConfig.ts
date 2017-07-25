import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemsComponent } from './MenuItems';
import { FooterComponent } from './Footer';
import { HomeComponent } from './Home';
import { VehiclesComponent } from './Vehicle';
import { AboutUsComponent } from './AboutUs';
import { ContactUsComponent } from './ContactUs';

const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Cabs', component: VehiclesComponent },
    { path: 'AboutUs', component: AboutUsComponent },
    { path: 'ContactUs', component: ContactUsComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouteConfig { }
export const AppRouteComponents = [MenuItemsComponent, FooterComponent, HomeComponent, VehiclesComponent, AboutUsComponent, ContactUsComponent];


