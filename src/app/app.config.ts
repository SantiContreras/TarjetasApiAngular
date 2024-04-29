import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom(
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyCmG8d7W4n9rLSkpVlGbOzu9hCg9XOWuDc",
        authDomain: "tarjetacredito-2245c.firebaseapp.com",
        projectId: "tarjetacredito-2245c",
        storageBucket: "tarjetacredito-2245c.appspot.com",
        messagingSenderId: "917746332651",
        appId: "1:917746332651:web:1266de750211be1c739fae"
      }),
    )),
    importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};


