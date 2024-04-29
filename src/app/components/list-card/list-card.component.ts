import { Component, OnInit } from '@angular/core';
import { tarjetaCredito } from '../../models/cardCredit';
import { TarjetaService } from '../../services/tarjeta.service';
import { NgFor } from '@angular/common';
import swal from 'sweetalert2'

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent implements OnInit {


  listaTarjetas: tarjetaCredito[] = [];
  

  constructor(private _tarjetaService: TarjetaService
              ) { }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.obtenerTarjetas().subscribe(filas => {
     
      this.listaTarjetas= filas; // representa a casa fila de la base de datos
      
     
    })

    console.log(this.listaTarjetas)
  }

  async eliminarTarjeta(tarjeta: tarjetaCredito){
    const response = await this._tarjetaService.eliminar(tarjeta)
    console.log(response)
    swal.fire("Tarjeta eliminada","eliminada")
  
  }

}


