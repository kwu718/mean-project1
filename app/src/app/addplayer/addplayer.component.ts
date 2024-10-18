import { Component } from '@angular/core';
import { PlayerReactiveFormComponent } from '../player-reactive-form/player-reactive-form.component';
import { HttpService } from '../services/http.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-addplayer',
  standalone: true,
  imports: [PlayerReactiveFormComponent],
  templateUrl: './addplayer.component.html',
  styleUrl: './addplayer.component.css'
})
export class addPlayerComponent {

  constructor(private httpService: HttpService){
  }

  createPlayer(player: Player){
    this.httpService.createPlayer(player).subscribe(data =>{
      console.log(data);
    })
  }
}
