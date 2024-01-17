// game-board.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Cell {
  symbol: string;
  playerName: string;
}

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  @Input() player1: string = 'Player 1';
  @Input() player2: string = 'Player 2';
  @Output() gameBoardReady = new EventEmitter<GameBoardComponent>();
  @Output() gameOver = new EventEmitter<string>();

  @Input() player1WinCount: number = 0;
  @Input() player2WinCount: number = 0;
  @Input() drawCount: number = 0;
  moves: Cell[][] = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({ symbol: '', playerName: '' })));
  currentPlayerIndex: number = 0;
  winner: string = null;
  draw: boolean = false;
  // player1WinCount: number = 0;
  // player2WinCount: number = 0;
  // drawCount: number = 0;

  ngAfterViewInit(): void {
    this.gameBoardReady.emit(this);
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
 
  
  makeMove(row: number, col: number) {
    if (!this.moves[row][col].symbol && !this.winner && !this.draw) {
      this.moves[row][col].symbol = this.currentPlayerSymbol;
      this.moves[row][col].playerName = this.currentPlayerIndex === 0 ? this.player1 : this.player2;
      this.checkWinner();
      this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }
  }
  clearNames() {
   this.player1='player -1'
   this.player2=''
    this.player1WinCount = 0;
    this.player2WinCount = 0;
    this.drawCount = 0;
  }
  checkWinner() {
    const winningCombinations: number[][][] = [
      [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]], [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination.map(([r, c]) => this.moves[r][c]);
      if (a.symbol && a.symbol === b.symbol && a.symbol === c.symbol) {
        this.winner = a.playerName;

        // Emit the game over event with the winner
        this.gameOver.emit(this.winner);

        // Update the winning counts
        this.updateWinCounts(this.winner);
        return;
      }
    }

    if (this.isBoardFull()) {
      this.draw = true;

      // Emit the game over event with null (no winner in case of a draw)
      this.gameOver.emit(null);

      // Update the winning counts
      this.updateWinCounts(null);
    }
  }


  get currentPlayerSymbol(): string {
    return this.currentPlayerIndex === 0 ? 'X' : 'O';
  }

  isBoardFull(): boolean {
    return this.moves.every(row => row.every(cell => cell.symbol !== ''));
  }

  restartGame() {
    this.moves.forEach(row => row.forEach(cell => {
      cell.symbol = '';
      cell.playerName = '';
    }));
    this.currentPlayerIndex = 0;
    this.winner = null;
    this.draw = false;
  }
}
