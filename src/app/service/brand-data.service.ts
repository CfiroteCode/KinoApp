import { Injectable } from '@angular/core';
import { range, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  url = 'http://62.210.247.201:9000/test';
  rawBrands: Brand[];
  dataCaroussel = new Array();
  minRange : number;
  maxRange : number;

  jsn = fetch(this.proxyurl + this.url)
    .then(res => res.json())
    .then((out) => {
      this.ParseData(JSON.stringify(out));
      return out;
    }).catch(err => console.error(err));


  constructor() { }

  ParseData(jsn: string) {
    console.log(jsn);
    this.rawBrands = JSON.parse(jsn);
    this.GenerateDatas();
  }

  GenerateDatas() {
    this.minRange = this.rawBrands[Object.keys(this.rawBrands).reduce((key, v) => this.rawBrands[v].weight < this.rawBrands[key].weight ? v : key)].weight;
    this.maxRange = this.rawBrands[Object.keys(this.rawBrands).reduce((key, v) => this.rawBrands[v].weight > this.rawBrands[key].weight ? v : key)].weight;


    for (var i = this.minRange; i < this.maxRange; i++) {
      for (let b of this.rawBrands) {
        if (b.weight >= i && this.dataCaroussel[this.dataCaroussel.length-1] != b.image) {
          this.dataCaroussel.push(b.image);
        }
      }
    }

    console.log(this.dataCaroussel);
  }
}

interface Brand {
  name: string;
  image: string;
  weight: number;
}
