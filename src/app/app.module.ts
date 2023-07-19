import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { GeneralRoutingModule } from './general/general-routing.module';



@NgModule({
  declarations: [
    AppComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    GeneralRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
