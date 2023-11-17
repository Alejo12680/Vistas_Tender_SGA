import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-remesa',
  templateUrl: './remesa.component.html',
  styleUrls: ['./remesa.component.scss']
})

export class RemesaComponent {

  public valorConsulta: string[] = [];

  // Variables de los array de Objetos ***Para más adelante ser servicios aplicados***:

  public remitente: { remitente: string, cantidad: number, origen: string } = { 
    remitente: 'KOPPS COMMERCIAL S.A.S-KOPPS COMMERCIAL S.A.S-N. D', cantidad: 10, origen: 'Cúcuta, Norte de Santander' 
  };

  public destinatario: { destinatario: string, direccion: string, destino: string } = {
    destinatario: 'KOPPS COMMERCIAL S.A.S-KOPPS', direccion: '', destino: 'Cúcuta, Norte de Santander'
  };

  public datosTable: { guia: string, factura: string, cod_destinatario: number, destinatario: string, direccion: string, ciudad: string, estado: string, fechaOperacion: string  }[] = [
    {guia: '44-2211400790', factura: 'CO-Ge CUCTA', cod_destinatario: 900224720, destinatario: 'Comserloc', direccion: 'Calle 3 # 7 - 45', ciudad: 'Cúcuta', estado: 'Recogido', fechaOperacion: '2023-11-14 17:01:03'},
    {guia: '44-2211400789', factura: 'CO-Ge CUCTA', cod_destinatario: 900224720, destinatario: 'Comserloc', direccion: 'Calle 3 # 7 - 45', ciudad: 'Cúcuta', estado: 'Entregado', fechaOperacion: '2023-11-14 16:15:21'},
    {guia: '44-2211400788', factura: 'CO-Ge CUCTA', cod_destinatario: 13807732, destinatario: 'La Esquina De La Economia', direccion: 'AV 19 21A-50', ciudad: 'Cúcuta', estado: 'Entregado', fechaOperacion: '2023-11-14 12:31:50'},
    {guia: '44-2211400787', factura: 'CO-Ge CUCTA', cod_destinatario: 13221723, destinatario: 'NEW YORK', direccion: 'call 8 #0-28', ciudad: 'Cúcuta', estado: 'Recogido', fechaOperacion: '2023-11-14 14:51:50'},
    {guia: '44-2211400786', factura: 'CO-Ge CUCTA', cod_destinatario: 1969853, destinatario: 'Betel Niza', direccion: 'CL 17 18E-14', ciudad: 'Cúcuta', estado: 'Entregado', fechaOperacion: '2023-11-14 11:29:14'},
    {guia: '44-2211400785', factura: 'CO-Ge CUCTA', cod_destinatario: 1269853, destinatario: 'Betel Niza', direccion: 'CL 17 18E-14', ciudad: 'Cúcuta', estado: 'Recogido', fechaOperacion: '2023-11-14 11:25:35'},
    {guia: '44-2211400784', factura: 'CO-Ge CUCTA', cod_destinatario: 12498510, destinatario: 'Montes Gazapa', direccion: 'AV 8 CLL 7 ESTE', ciudad: 'Cúcuta', estado: 'Recogido', fechaOperacion: '2023-11-14 10:57:02'},
    {guia: '44-2211400783', factura: 'CO-Ge CUCTA', cod_destinatario: 12498510, destinatario: 'Montes Gazapa', direccion: 'AV 8 CLL 7 ESTE', ciudad: 'Cúcuta', estado: 'Recogido', fechaOperacion: '2023-11-14 10:55:37'},
    {guia: '44-2211400782', factura: 'CO-Ge CUCTA', cod_destinatario: 12498510, destinatario: 'Montes Gazapa', direccion: 'AV 8 CLL 7 ESTE', ciudad: 'Cúcuta', estado: 'Recogido', fechaOperacion: '2023-11-14 10:54:41'},
    {guia: '44-2211400790', factura: 'CO-Ge CUCTA', cod_destinatario: 12498510, destinatario: 'Montes Gazapa', direccion: 'AV 8 CLL 7 ESTE', ciudad: 'Cúcuta', estado: 'Recogido', fechaOperacion: '2023-11-14 10:13:01'},
  ];

  public estados: string[] = ['Orden Creada', 'Asignacion a Vehiculo', 'En Reparto', 'Cumplida'];

  constructor(private miServicio: ServiciosService) {}

  ngOnInit() {

    // Mi servicio BehaviorSubject
    this.miServicio.valorConsulta$.subscribe(valor => {
      // El Split nos ayuda que el string que llega de la consulta se separe y se convierta en un array de string
      this.valorConsulta = valor.split(''); 
      console.log(this.valorConsulta);
    });
  }

  

}
