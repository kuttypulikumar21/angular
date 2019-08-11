import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DemocomponentoneComponent } from './democomponentone/democomponentone.component';
import { DemocomponenttwoComponent } from './democomponenttwo/democomponenttwo.component';
exports: [ RouterModule ] 
const routes: Routes = [
  { path: 'userlogin', component: UserloginComponent },
  { path: 'democomponentone', component: DemocomponentoneComponent },
  { path: 'democomponenttwo', component: DemocomponenttwoComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }