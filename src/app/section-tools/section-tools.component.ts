import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-tools',
  templateUrl: './section-tools.component.html',
  styleUrls: ['./section-tools.component.scss']
})
export class SectionToolsComponent implements OnInit {

 public toolsList=['Angular','JavaScript','CSS'];

  constructor() { }

  ngOnInit(): void {
  }

}
