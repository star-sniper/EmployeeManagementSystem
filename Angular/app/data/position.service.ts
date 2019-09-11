import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Position } from './position';
@Injectable()
export class PositionService {
  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>("https://web422-teamsdata-harora.herokuapp.com/positions")
  }
  savePosition(position : Position): Observable<any> {
    return this.http.put<any>("https://web422-teamsdata-harora.herokuapp.com/position/" + position._id, position);
  }

  getPosition(id): Observable<Position[]>{
    return this.http.get<Position[]>("https://web422-teamsdata-harora.herokuapp.com/position/" + id);
  }
}