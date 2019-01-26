import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  juegos=null;
  constructor( private jefechuopelo:HeroService) { }
  ngOnInit() {
    this.juegos = this.jefechuopelo.getGame();
  }

}
