import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  //animacion del menu
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class ToolbarComponent implements OnInit {

  portfolio : any;
  

  constructor(private portfolioData:PortfolioDataService, public router: Router){

  }
  
  ngOnInit(): void {
  
    //service trae los datos del .json
    this.portfolioData.getData().subscribe(data =>{
      console.log(data);
    this.portfolio = data;

    });
  }
  menuState:string = 'out';
  
    toggleMenu() {
      // 1-line if statement that toggles the value:
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}
