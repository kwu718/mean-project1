import {Player} from '../models/player'
export class Team {

    team_name: string;
    team: Player[];

    constructor(team_name: string, team: Player[]){
        this.team_name = team_name;
        this.team = team;
    }
    
}
