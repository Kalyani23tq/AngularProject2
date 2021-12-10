import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmproutComponent } from './emprout/emprout.component';
import { ChildroutComponent } from './childrout/childrout.component';
import { LogingaurdGuard } from './logingaurd.guard';
import { TempletFormsDemoComponent } from './templet-forms-demo/templet-forms-demo.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import { CrudLocalComponent } from './crud-local/crud-local.component';
import { CrudsessionComponent } from './crudsession/crudsession.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymoduleModule } from './mymodule/mymodule.module';
import { MymaterialcomponentComponent } from './mymaterialcomponent/mymaterialcomponent.component';
//import { Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:"home",component:HomeComponent,
  children:[{path:'child',component:ChildroutComponent}],canActivate:[LogingaurdGuard]},
  {path:"login",component:LoginComponent},
  {path:"empcode/:code",component:EmproutComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    EmproutComponent,
    ChildroutComponent,
    TempletFormsDemoComponent,
    ReactiveDemoComponent,
    CrudLocalComponent,
    CrudsessionComponent,
    MymaterialcomponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,MymoduleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
