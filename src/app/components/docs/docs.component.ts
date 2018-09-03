import { Component, OnInit } from '@angular/core';
import { fadeAnimation, docsAnimation } from '../../animations';

@Component({
  selector: 'mp-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  animations: [docsAnimation]
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
