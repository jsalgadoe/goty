import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

/* Modulos */
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
