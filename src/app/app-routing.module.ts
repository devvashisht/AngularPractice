import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NgzoneexampleComponent } from './ngzoneexample/ngzoneexample.component';
import { ChagnedetectrefComponent } from './chagnedetectref/chagnedetectref.component';
import { CreationalOperatorComponent } from './creational-operator/creational-operator.component';
import { PipeOperatorComponent } from './pipe-operator/pipe-operator.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
    { path: 'loginPage', component: LoginPageComponent },
    { path: 'loginSuccess', component: LoginSuccessComponent },
    { path: 'ngZoneExample', component: NgzoneexampleComponent },
    { path: 'changeDetectref', component: ChagnedetectrefComponent },
    { path: 'creationObservable', component: CreationalOperatorComponent },
    { path: 'pipeOperator', component: PipeOperatorComponent },
    { path: 'SubjectComponent', component: SubjectComponent },
    { path: '',   redirectTo: '/loginPage', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: LoginPageComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }