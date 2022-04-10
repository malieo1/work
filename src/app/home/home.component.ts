import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  panelOpenState = false;
 

  constructor() { 
    
  }

  chartClicked(event: any): void {
    console.log(event);
  }

  chartHovered(event: any): void {
    console.log(event);
  }
 

  ngOnInit(): void {
  }

}

