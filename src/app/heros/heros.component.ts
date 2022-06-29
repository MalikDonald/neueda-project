import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { TEAM } from "../teamMembers";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  team = TEAM;

  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}
