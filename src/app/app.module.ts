import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CreategameComponent } from './creategame/creategame.component';
import { ShowgameComponent } from './showgame/showgame.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CreategameComponent,
    ShowgameComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
