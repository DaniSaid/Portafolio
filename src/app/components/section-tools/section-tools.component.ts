import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-tools',
  templateUrl: './section-tools.component.html',
  styleUrls: ['./section-tools.component.scss']
})
export class SectionToolsComponent implements OnInit {

 myData : any;

  constructor(private portfolioData:PortfolioDataService) { }

  ngOnInit(): void {
  
    this.portfolioData.getData().subscribe(data =>{
      console.log(this.myData);
    
    this.myData = data;
    });

  }

}
