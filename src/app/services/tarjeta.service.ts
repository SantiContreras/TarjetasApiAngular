import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { tarjetaCredito } from '../models/cardCredit';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor( private firebase: Firestore ) { }

  guardarTarjeta(tarjeta:tarjetaCredito){
    
    const tarj =collection(this.firebase ,'tarjetas') 
     return addDoc(tarj , tarjeta)
  }

  obtenerTarjetas(): Observable<any>{
    const collectionTarjetas = collection(this.firebase ,'tarjetas')
    return collectionData(collectionTarjetas,{idField:'id'}) as Observable<any>

  }

  eliminar(tarjeta: tarjetaCredito){
     const placeDocRef = doc(this.firebase , `tarjetas/${tarjeta.id}`)
     return deleteDoc(placeDocRef);
     console.log("tarjeta eliminada")
  }

  
}
