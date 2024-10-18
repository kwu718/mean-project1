import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { observeNotification } from 'rxjs/internal/Notification';
import { Coach } from '../models/coach';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'http://localhost:8080/';

  getAllTeams(): Observable<HttpResponse<Team[]>>{
    return this.http.get<Team[]>(this.baseURL + 'teams', {observe: 'response'});
  }

  createTeam(team: Team): Observable<HttpResponse<Team>>{
    return this.http.post<Team>(this.baseURL + 'teams', team, {observe: 'response'});
  }

  deleteTeam(id: number): Observable<HttpResponse<void>>{
    return this.http.delete<void>(this.baseURL + 'teams/' + id, {observe: 'response'});
  }

  getPlayerById(id: number): Observable<HttpResponse<any>>{
    return this.http.get<Player>(this.baseURL + 'players/' + id, {observe: 'response'});
  }

  getPlayersByTeam(team: number | string): Observable<HttpResponse<any>>{
    return this.http.get<Player[]>(this.baseURL + 'players' + '?team=' + team, {observe: 'response'});
  }

  createPlayer(player: Player): Observable<HttpResponse<Player>>{
    return this.http.post<Player>(this.baseURL + 'players', player, {observe: 'response'})
  }

  deletePlayer(id: number): Observable<HttpResponse<void>>{
    return this.http.delete<void>(this.baseURL + 'players/' + id, {observe: 'response'});
  }

  updatePlayer(id: number, player: Player): Observable<HttpResponse<Player>>{
    return this.http.put<Player>(this.baseURL + 'players/' + id, player, {observe: 'response'});
  }

  createCoach(coach: Coach): Observable<HttpResponse<Coach>>{
    return this.http.post<Coach>(this.baseURL + 'coaches', coach, {observe: 'response'});
  }
}
