import { Component } from '@angular/core';
import { MyoperfuncService } from './myoperfunc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyoperfuncService]
})
export class AppComponent {
  title = 'facebookapp';
  
  constructor(private myoperfunc:MyoperfuncService)
  {
  }
  myclick()
    {
    this.myoperfunc.count++;
  }
}
