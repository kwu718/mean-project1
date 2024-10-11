import { Routes } from '@angular/router';
import { addPlayerComponent } from './addplayer/addplayer.component';
import { CoachComponent } from './coach/coach.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

export const routes: Routes = [
    {
        path: 'player',
        component: addPlayerComponent
    },
    {
        path: 'coach',
        component: CoachComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'player/:first_name',
        component: PlayerDetailsComponent
    }
];
