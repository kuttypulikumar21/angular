import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { DemocomponentoneComponent } from './democomponentone/democomponentone.component';
import { DemocomponenttwoComponent } from './democomponenttwo/democomponenttwo.component';
import { MyoperfuncService } from './myoperfunc.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserloginComponent,
    UsersignupComponent,
    DemocomponentoneComponent,
    DemocomponenttwoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [MyoperfuncService],
  bootstrap: [AppComponent]
})
export class AppModule { }

