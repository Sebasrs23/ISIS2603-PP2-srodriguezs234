import { Component, OnInit } from '@angular/core';
import { Nave } from './nave';
import { NavesService } from './naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {
  selected: boolean=false;
  selectedNave!: Nave; 
  naves: Array<Nave> = [];
  contadorRebelion: number = 0;
  contadorImperio: number = 0;
  contadorNeutral: number = 0;

  constructor(private navesService: NavesService) { }

  getNaves() {
    this.navesService.getNaves().subscribe(naves => {
      this.naves = naves;
      this.contarNavesPorBando();
    });
  }

  onSelected(nave: Nave): void {
    this.selected = true;
    this.selectedNave = nave;
  }

  contarNavesPorBando(): void {
    this.contadorRebelion = this.naves.filter(nave => nave.bando === 'Rebelión').length;
    this.contadorImperio = this.naves.filter(nave => nave.bando === 'Imperio').length;
    this.contadorNeutral = this.naves.filter(nave => nave.bando === 'Neutral').length;
  }

  ngOnInit() {
    this.getNaves();
  }

}