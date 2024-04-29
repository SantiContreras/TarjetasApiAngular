export class tarjetaCredito {
    id?: string;
    titular:string;
    numeroTarjeta:String;
    fechaExpiracion:String;
    cvv:Number;
    fechaActualizacion:Date
    fechaCreacion:Date

    constructor(id:string , titular : string , numeroTarjeta:string , cvv:number, fechaExpiracion : string , fechaActualizacion : Date , fechaCreacion :Date){
      this.id = id;
      this.titular= titular
      this.cvv = this.cvv ;
      this.fechaCreacion = new Date();
      this.numeroTarjeta = numeroTarjeta;
      this.fechaActualizacion = new Date();
      

    }
}