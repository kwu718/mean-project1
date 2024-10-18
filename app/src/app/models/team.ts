
import { Coach } from './coach';
import { Player } from './player';
export class Team {


    id: number;
    teamName: string;
    coach: Coach;
    coachFirstName: string;
    coachLastName: string;
    players: Player[];
    constructor(id: number, teamName: string, coach: Coach){
        this.id = id;
        this.teamName = teamName;
        this.coach = coach;
        this.coachFirstName = coach.firstName;
        this.coachLastName = coach.lastName;
        this.players = [];
    }
    
    
}
