// players.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() player1Name: string = '';
  @Input() player2Name: string = '';
  @Output() player1NameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() player2NameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() namesCleared: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  saveNames() {
    console.log('Player 1:', this.player1Name);
    console.log('Player 2:', this.player2Name);
  }

  onPlayer1NameChange() {
    this.player1NameChange.emit(this.player1Name);
  }

  onPlayer2NameChange() {
    this.player2NameChange.emit(this.player2Name);
  }

  swapNames() {
    const temp = this.player1Name;
    this.player1Name = this.player2Name;
    this.player2Name = temp;
  }

  cleanNames() {
    this.player1Name = '';
    this.player2Name = '';
    this.namesCleared.emit();
  }
}
