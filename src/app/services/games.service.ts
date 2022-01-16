import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { game } from '../interfaces/interfaces.interface';
import {of, pipe} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class GamesService {

  juegos:game[] = [];

  constructor(private http: HttpClient) { }

  getNominados(){
    console.log(environment);
    if( this.juegos.length> 0 ){
      console.log("Desde la cache");
      return of(this.juegos);

    }else{
      console.log("Desde la red");
      return this.http.get<game[]>(`${environment.url}/api/goty`)
      .pipe(
        tap( games => this.juegos = games )
      );
    }
    
  }

  votarJuego(id:string){
  return this.http.post(`${environment.url}/api/goty/${id}`,{})
  .pipe(
    catchError(err => {
      console.log(err);
      return of(err.error);
    })
  )


}
}
