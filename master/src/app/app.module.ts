import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PatientsComponent } from './patients/patients.component';
import { PatcontentComponent } from './patcontent/patcontent.component';

import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule,Routes } from '@angular/router';
import { Patcontent2Component } from './patcontent2/patcontent2.component';

const routes:Routes=[
  {path:'patient',component:PatientsComponent,children:[
    {path:':id',component:PatcontentComponent}
  ]},
  
  {path:'',redirectTo:'/patient',pathMatch:'full'},
  {path:'**',redirectTo:'/patient',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PatientsComponent,
    PatcontentComponent,
    Patcontent2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
