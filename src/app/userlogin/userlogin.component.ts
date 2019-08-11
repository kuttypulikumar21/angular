import { Component, OnInit } from '@angular/core';
import { usersecdata } from './userchild';
import { usercoredata } from './userparent'
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  maindata = usersecdata;
  tempdata:usercoredata;
  herodata: any;

  constructor() { }

  ngOnInit() {
  }
  myfunction(mydata:usercoredata)
    {
      this.herodata = mydata;
    }

}
