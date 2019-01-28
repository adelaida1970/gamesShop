import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  productCategory: any;
  shop: any=[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {

  }

  perra()
  {
    this.productCategory = this.heroService.SearchCategory(1);
   
  }

  puta()
  {
    this.productCategory = this.heroService.SearchCategory(2);
  }
  zorra(){
    this.productCategory = this.heroService.SearchCategory(3);
  }
  fresa(){
    this.productCategory = this.heroService.SearchCategory(4);
  }
  guayaba(){
    this.productCategory = this.heroService.SearchCategory(5);
  }
  mango(){
    this.productCategory = this.heroService.SearchCategory(5);
  }
  facil(){
    this.productCategory = this.heroService.SearchCategory(5);
  }
  lechoza(){
    this.productCategory = this.heroService.AvailableGame(true);
  }
  
 
  
nepe(id:number){
  let article = this.productCategory.find(a=>a.id == id);
  this.shop.push(article);
  console.log(this.shop);
}

deleteItem(id:number){
  for(var i = 0; i <this.shop.length;i++){
    if(this.shop[i].id == id){
      this.shop.splice(i,1);
      break;
    }
  }
  console.log(this.shop);
}

}
