import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { enviroment } from '../Enviroments/enviroment';
import { provideFirebaseApp } from '@angular/fire/app';

//import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    ReactiveFormsModule,
    provideFirebaseApp,
    //AngularFireModule ,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
}
