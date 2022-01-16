import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { game } from '../../interfaces/interfaces.interface';
import Swal from 'sweetalert2';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {


  games: game[] = [];


  constructor(private gameService: GamesService) {
    this.gameService.getNominados().subscribe(
      resp => {

        this.games = resp;
        console.log(this.games);
      }
    )
  }

  ngOnInit(): void {


  }

  votarJuego(juego: game) {
    
    this.gameService.votarJuego( juego.id )
    .subscribe( (resp: {ok: boolean, mensaje: string }) => {
console.log(resp.mensaje);
      if ( resp.ok == true ) {
        Swal.fire('Gracias',resp.mensaje, 'success' );
      } else {
        Swal.fire('Oops',resp.mensaje, 'error' );
      }

    });
  }

}
