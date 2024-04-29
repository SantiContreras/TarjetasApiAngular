import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { ToastrModule } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CrearTarjetaComponent } from './components/crear-tarjeta/crear-tarjeta.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { enviroment } from '../Enviroments/enviroment';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

//import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    ReactiveFormsModule,
    ListCardComponent,


    //AngularFireModule ,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),



    //ToastrModule.forRoot()
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideFirestore(() => getFirestore())
  ],


  providers: [],
  bootstrap: []
})
export class AppModule { }