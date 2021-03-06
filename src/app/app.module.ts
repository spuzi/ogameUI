import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SpionageComponent } from './spionage/spionage.component';
import { CostCalculatorComponent } from './cost-calculator/cost-calculator.component'


@NgModule({
  declarations: [
    AppComponent , LoginComponent, SpionageComponent, CostCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
