import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'


@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.scss']
})
export class SectionEducationComponent implements OnInit {

  myData : any;

  constructor(private porfolioData:PortfolioDataService) { }

  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data=>{
      this.myData = data;
    })
  }

}
