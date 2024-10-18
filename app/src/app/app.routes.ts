import { Routes } from '@angular/router';
import { addPlayerComponent } from './addplayer/addplayer.component';
import { addTeamComponent } from './addTeam/addTeam.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

export const routes: Routes = [
    {
        path: 'player',
        component: addPlayerComponent
    },
    {
        path: 'coach',
        component: addTeamComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'players/:id',
        component: PlayerDetailsComponent
    }
];
