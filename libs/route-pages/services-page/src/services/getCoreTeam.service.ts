import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoreTeam } from '../components/core-team/core-team.component';

@Injectable({ providedIn: 'platform' })
export class getCoreTeamServices {

  constructor(
    private http: HttpClient
  ) {

  }

  getCoreTeamServices(): Observable<ICoreTeam[]> {
    return this.http.get<ICoreTeam[]>(`assets/core-team/core-team.json`);
  }

}