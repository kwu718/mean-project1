import { Component, Input } from '@angular/core';
import { Player } from '../models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  constructor(private router: Router){

  }
  @Input() player: Player = new Player('', '', 0, 0, 0, '');

  showDetails() {
    this.router.navigate([ 'player/' + this.player.first_name]);
  }
}
