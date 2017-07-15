import { Component, OnInit } from "@angular/core";
import { APIService } from '../Api/Services';

@Component({
  templateUrl: 'Views/AboutUs.html'
})
export class AboutUsComponent implements OnInit {
  constructor() { }
  public aboutUsText = "About Us";
  public aboutUsDescription = "Payana is a new application for transportation, integrates city transportation for customers and driver partners onto a mobile technology platform. As one of India's fastest growing companies we ensure convenient, transparent and quick service fulfilment using technology to make transportation hassle free for everyone.Payana's offerings on its platform ranges from affordable AC cabs to the superior luxury offering as well as localized offerings like the ubiquitous Auto-rickshaws to Shuttle buses for daily commute. Using the Payana mobile app, users across 102 cities can conveniently book from over 450,000 vehicles available to them.We�ve empowered hundreds of thousands of driver-partners as entrepreneurs, by building an ecosystem encompassing financing institutions, car manufacturers, service providers etc. for drivers to grow professionally and personally as well as a consistent earning opportunity for them on the Payana platform.";

  ngOnInit() {
    // this.apiService.FetchSiteContents().subscribe(data => console.log(data));
  }

}