import { Component, OnInit } from '@angular/core';
import { BrandDataService } from '../service/brand-data.service';

@Component({
  selector: 'app-caroussel-brand',
  templateUrl: './caroussel-brand.component.html',
  styleUrls: ['./caroussel-brand.component.css']
})
export class CarousselBrandComponent implements OnInit {

  brands: BrandDataService;

  carouselimg :string[];

  constructor(brands: BrandDataService) {
    this.brands = brands;
    this.carouselimg = brands.dataCaroussel;
  }

  ngOnInit(): void {
  }

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    autoplay: true
  }

}
