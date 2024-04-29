import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, Validators, FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { tarjetaCredito } from '../../models/cardCredit';
import { TarjetaService } from '../../services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';
import swal from 'sweetalert2'


@Component({
  selector: 'app-crear-tarjeta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  form : FormGroup;
  loading = false;
  titulo = 'Agregar Tarjeta';
  id: string | undefined;

  constructor(private fb: FormBuilder,
            private _tarjetaServices :TarjetaService ) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
   }

  ngOnInit(): void {

  }

  crearTarjeta() {
   const tarjeta : tarjetaCredito = {
     titular: this.form.value.titular,
     numeroTarjeta: this.form.value.numeroTarjeta,
     fechaExpiracion: this.form.value.fechaExpiracion,
     cvv: this.form.value.cvv,
     fechaCreacion: new Date(),
     fechaActualizacion: new Date()
   } 
  
   this._tarjetaServices.guardarTarjeta(tarjeta).then(()=>{
    console.log("tarjeta registrada"),
    swal.fire(
      'Tarjeta agregada !',
      'You clicked the button!',
      'success'
    )
   })

   //this.toastr.success('registro correctamente','tarjeta resgistrada correctamente')
   console.log(tarjeta)
   
  }

  editarTarjeta(id: string) {
  }

  agregarTarjeta() {
 
  }

}
