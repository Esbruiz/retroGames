import {Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {Game} from "../models/Game";

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreategameComponent implements OnInit {

  @Output() gameCreated = new EventEmitter();

  private modalRef: NgbModalRef;
  newGame: Game = new Game();
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    this.newGame.id = Math.floor((Math.random() * 1000000) + 1);
    this.gameCreated.emit({ game: this.newGame });
    this.newGame = new Game();
    form.reset();
    this.modalRef.close();
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
  }
}
