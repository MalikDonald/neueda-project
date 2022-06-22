import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  template: `<h2>{{ hero }}</h2>`,
  //templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero = 'Windstorm';

  constructor() { }

  ngOnInit(): void {
  }

}
