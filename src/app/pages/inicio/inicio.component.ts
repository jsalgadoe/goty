import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map } from 'rxjs/operators';
import { game } from '../../interfaces/interfaces.interface';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private db: AngularFirestore ) { 

   
  }
juegos:any = [];
  ngOnInit(): void {
    this.db.collection<game>('goty').valueChanges().
     pipe(
      map( (resp: game[]) => resp.map( ({ name, score }) => ({ name, value: score }) ))
      
     )
    .subscribe(
      resp => {
        this.juegos = resp;
      }
      
    )
     
  }

}
