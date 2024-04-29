import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearTarjetaComponent } from './components/crear-tarjeta/crear-tarjeta.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { AngularFireModule } from '@angular/fire/compat'
import { enviroment } from '../Enviroments/enviroment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    CrearTarjetaComponent,

    AngularFireModule,
    AngularFirestoreModule,
    ListCardComponent,
    ToastrModule





  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectCardAngular';
}
