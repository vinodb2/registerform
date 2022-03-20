import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { APIComponent } from './api/api.component';
import { ServicesComponent } from './API/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    APIComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
