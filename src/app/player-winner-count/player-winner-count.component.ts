// player-winner-count.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-winner-count',
  template: `
    <div class="mb-4">
      <div class="winner-names-container p-3 shadow">
        <p class="text-center">{{ player1 }} Wins: {{ player1WinCount }}</p>
        <p class="text-center">{{ player2 }} Wins: {{ player2WinCount }}</p>
        <p class="text-center">Draws: {{ drawCount }}</p>
      </div>
    </div>
  `,
  styles: [`
    /* Add any custom styles for the component here */
  `]
})
export class PlayerWinnerCountComponent {
  @Input() player1: string = '';
  @Input() player2: string = '';
  @Input() player1WinCount: number = 0;
  @Input() player2WinCount: number = 0;
  @Input() drawCount: number = 0;
  clearNames() {
    this.player1=''
    this.player2=''
     this.player1WinCount = 0;
     this.player2WinCount = 0;
     this.drawCount = 0;
   }
}
