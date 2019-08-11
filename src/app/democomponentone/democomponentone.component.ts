import { Component, OnInit, Input } from '@angular/core';
import { MyoperfuncService } from '../myoperfunc.service';

@Component({
  selector: 'app-democomponentone',
  templateUrl: './democomponentone.component.html',
  styleUrls: ['./democomponentone.component.css'],
  providers :[MyoperfuncService]
})
export class DemocomponentoneComponent implements OnInit {
@Input() name:string;  
  constructor(private myoperfuncService:MyoperfuncService) { }

  ngOnInit() {
  }

}
// ./democomponentone.component.html