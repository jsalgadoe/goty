import { MapType } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results:any[]=[];
  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 10
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 20
  //   },
  //   {
  //     "name": "France",
  //     "value": 30
  //   },
  //   {
  //     "name": "spain",
  //     "value": 30
  //   }
  // ];


  view:any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'votos';

  colorScheme = 'nightLights' ;


  intervalo:any;

  constructor() {

 

    // this.intervalo = setInterval( () => {
    //   const newresults = [...this.results]
    //   console.log('tick');
    //   for (let i in newresults){
    //     newresults[i].value = Math.round(Math.random() * 500);
    //   }

    //   this.results =  [...newresults];
    // },1500)


  }

  onSelect(event:Event) {
    console.log(event);
  }
  
  ngOnDestroy(): void {
      // clearInterval(this.intervalo);
  }

}
