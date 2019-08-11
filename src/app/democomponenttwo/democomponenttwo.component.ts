import { Component, OnInit } from '@angular/core';
import{ mobilecorelist } from './itemlist';
import{ mobilesrc } from './mobilesrctype';

@Component({
  selector: 'app-democomponenttwo',
  templateUrl: './democomponenttwo.component.html',
  styleUrls: ['./democomponenttwo.component.css']
})
export class DemocomponenttwoComponent implements OnInit {
  mobilestocklist = mobilecorelist;
  constructor() { }

  ngOnInit() {
  }

}
