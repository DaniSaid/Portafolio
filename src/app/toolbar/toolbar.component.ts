import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  logo : string = " /assets/images/APLogo-darkmode.png";
  icon : string = " /assets/images/b-adjust.svg"

  constructor() { 

   }
  
  ngOnInit(): void {
  }

}
