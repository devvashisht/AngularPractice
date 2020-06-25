import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { AppRoutingModule } from './app-routing.module';
import { NgzoneexampleComponent } from './ngzoneexample/ngzoneexample.component';
import { ChagnedetectrefComponent } from './chagnedetectref/chagnedetectref.component';
import { CreationalOperatorComponent } from './creational-operator/creational-operator.component';
import { PipeOperatorComponent } from './pipe-operator/pipe-operator.component';
import { SubjectComponent } from './subject/subject.component'; // CLI imports AppRoutingModule
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginSuccessComponent,
    NgzoneexampleComponent,
    ChagnedetectrefComponent,
    CreationalOperatorComponent,
    PipeOperatorComponent,
    SubjectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
