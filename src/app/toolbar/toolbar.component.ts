import { Component, OnInit} from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  
public  icon : string = " /assets/images/b-adjust.svg"

portfolio : any;

  constructor(private portfolioData:PortfolioDataService, public router: Router){

  }
  
  ngOnInit(): void {
  
    this.portfolioData.getData().subscribe(data =>{
      console.log(data);
    
    this.portfolio = data;

    });
  }

}
