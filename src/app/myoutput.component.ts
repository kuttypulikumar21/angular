import { Component, Input } from '@angular/core';
import { MyoperfuncService } from './myoperfunc.service';

@Component({
  selector: 'myoutput',
  templateUrl: '<h1>red</h1>',
  styles: ['h1{ font-size:20px; }'],
  providers :[MyoperfuncService]
})
export class MyOutput {
@Input() name:string;  
  constructor(private myoperfuncService:MyoperfuncService) { }


}