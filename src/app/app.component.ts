// app.component.ts
import { Component, OnInit } from '@angular/core';
import { GameBoardComponent } from './game-board/game-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Poc_Angular_To_React';
  player1: string = 'Player 1';
  player2: string = 'Player 2';
  player1WinCount: number = 0;
  player2WinCount: number = 0;
  drawCount: number = 0;

  gameBoardComponent: GameBoardComponent;

  ngOnInit(): void {
    console.log(this.player1);
  }

  onGameBoardReady(gameBoard: GameBoardComponent): void {
    this.gameBoardComponent = gameBoard;
    this.gameBoardComponent.gameOver.subscribe((winner: string) => this.updateWinCounts(winner));
  }

  updateWinCounts(winner: string): void {
    if (winner === this.player1) {
      this.player1WinCount++;
    } else if (winner === this.player2) {
      this.player2WinCount++;
    } else {
      this.drawCount++;
    }
  }

  clearNames() {
   this.player1='player - 1'
   this.player2=''
    this.player1WinCount = 0;
    this.player2WinCount = 0;
    this.drawCount = 0;
  }
}
