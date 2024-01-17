import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent {
  @Input() winner: string;
  @Input() draw: boolean;
  @Output() restartGameEvent = new EventEmitter<void>();

  restartGame() {
    this.restartGameEvent.emit();
  }
}
