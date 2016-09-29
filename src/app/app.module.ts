import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from 'app/app.component';
import { HeaderComponent } from 'app/layout/header/header.component';
import { FooterComponent } from 'app/layout/footer/footer.component';
import { LoginComponent } from 'app/auth/login/login.component';
import {AuthService} from 'app/auth/auth.service';
import {DemoService} from 'app/sample/service/demo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService,DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
