import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  constructor(private route: ActivatedRoute){
      this.route = route;
  }
  player: Player = new Player('LeBron', 'James', 39, 6, 8, 'lbj@gmail.com');

}
