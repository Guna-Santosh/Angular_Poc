import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameOverComponent } from './game-over/game-over.component';
import { LogComponent } from './log/log.component';
import { FormsModule } from '@angular/forms';
import { PlayerWinnerCountComponent } from './player-winner-count/player-winner-count.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    GameBoardComponent,
    GameOverComponent,
    LogComponent,
    PlayerWinnerCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
