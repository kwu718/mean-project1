import { Component } from '@angular/core';
import { TeamReactiveFormComponent } from '../team-reactive-form/team-reactive-form.component';
import { HttpService } from '../services/http.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-addteam',
  standalone: true,
  imports: [TeamReactiveFormComponent],
  templateUrl: './addTeam.component.html',
  styleUrl: './addTeam.component.css'
})
export class addTeamComponent {

  constructor(private httpService: HttpService){
  }

  createTeam(team: Team){
    this.httpService.createTeam(team).subscribe(data =>{
      console.log(data);
    })
  }
}
