import { Component, Input, OnInit } from '@angular/core';
import { Nave } from '../nave';


@Component({
  selector: 'app-naveDetail',
  templateUrl: './naveDetail.component.html',
  styleUrls: ['./naveDetail.component.css']
})
export class NaveDetailComponent implements OnInit {

  @Input() NaveDetail!: Nave;

  constructor() { }

  ngOnInit() {
  }

}
