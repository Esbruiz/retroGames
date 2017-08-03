import { Component, OnInit, Input } from '@angular/core';
import {Game} from '../models/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
