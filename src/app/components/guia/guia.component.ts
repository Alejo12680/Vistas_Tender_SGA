import { Component } from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.scss']
})
export class GuiaComponent {

  progreso: number = 7
  progreso1: number = 7
  progreso2: number = 7
  progreso3: number = 7
  progreso4: number = 7
  progreso5: number = 7

  posicionHorizontalCirculo: number = 0;
  nombreRemitente: string = "COLOMBIA TELECOMUNICACIONES S.A ESP";
  ceros: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  mostrarCirculo: boolean[] = [false, false, false, false, false, false];

  cantidad: number = 9;
  origen = "Bogotá DC";
  destino = "Bogotá DC";
  estado = "Entregado";
  progresoActual: number = 0;
  /*
    1
    20
    40
    60
    80
    100

  */



  plataforma = "<plataforma>";
  condicion: boolean = true;
  steps = [
    { id: 1,date: '01/01/2023', time: '6:00', src: '../../../assets/caja.jpeg.jpg', alt: 'imagen de caja'},
    { id: 2,date: '11/11/2023', time: '10:50', src: '../../../assets/almacen.png', alt: 'imagen de almacen'},
    { id: 3,date: '12/11/2023', time: '11:29', src: '../../../assets/camion.png', alt: 'imagen de camion'},
    { id: 4,date: '14/11/2023', time: '17:43', src: '../../../assets/almacen.png', alt: 'imagen de almacen'},
    { id: 5,date: '16/11/2023', time: '8:41', src: '../../../assets/repartidor.png', alt: 'imagen de repartidor'},
    { id: 6,date: '6/11/2023', time: '9:48', src: '../../../assets/verificacion.png', alt: 'imagen de chequeo'}
  ];

  actualizarProgreso(id: number) {
    const contenedor = document.querySelector('.progress');

    if(id == 1){
      this.progresoActual = id * 0.3;
      this.mostrarCirculo[id] = true;
      if(this.mostrarCirculo[id] == true){
        if (contenedor) {
          const anchoContenedor = contenedor.clientWidth;
          const porcentajeProgreso = this.progresoActual / 100;
          this.posicionHorizontalCirculo = anchoContenedor * porcentajeProgreso;

         }
        this.progreso = this.posicionHorizontalCirculo
    }
    }
    else if(id == 2){
      this.progresoActual = id * 9.6;
      this.mostrarCirculo[id] = true;
      if(this.mostrarCirculo[id] == true){
        if (contenedor) {
          const anchoContenedor = contenedor.clientWidth;
          const porcentajeProgreso = this.progresoActual / 100;
          this.posicionHorizontalCirculo = anchoContenedor * porcentajeProgreso;

         }
        this.progreso1 = this.posicionHorizontalCirculo
    }
    }
    else if(id == 3){
      this.progresoActual = (id+1) * 9.7;
      this.mostrarCirculo[id] = true;
      if(this.mostrarCirculo[id] == true){
        if (contenedor) {
          const anchoContenedor = contenedor.clientWidth;
          const porcentajeProgreso = this.progresoActual / 100;
          this.posicionHorizontalCirculo = anchoContenedor * porcentajeProgreso;

         }
        this.progreso2 = this.posicionHorizontalCirculo
    }
    }
    else if(id == 4){
      this.progresoActual = (id+2) * 9.9;
      this.mostrarCirculo[id] = true;
      if(this.mostrarCirculo[id] == true){
        if (contenedor) {
          const anchoContenedor = contenedor.clientWidth;
          const porcentajeProgreso = this.progresoActual / 100;
          this.posicionHorizontalCirculo = anchoContenedor * porcentajeProgreso;

         }
        this.progreso3 = this.posicionHorizontalCirculo
    }
    }
    else if(id == 5){
      this.progresoActual = (id+3) * 9.9;
      this.mostrarCirculo[id] = true;
      if(this.mostrarCirculo[id] == true){
        if (contenedor) {
          const anchoContenedor = contenedor.clientWidth;
          const porcentajeProgreso = this.progresoActual / 100;
          this.posicionHorizontalCirculo = anchoContenedor * porcentajeProgreso;

         }

        this.progreso4 = this.posicionHorizontalCirculo
    }
    }
    else if(id == 6){
      this.progresoActual = (id+4) * 9.9;
      this.mostrarCirculo[id] = true;
      if(this.mostrarCirculo[id] == true){
        if (contenedor) {
          const anchoContenedor = contenedor.clientWidth;
          const porcentajeProgreso = this.progresoActual / 100;
          this.posicionHorizontalCirculo = anchoContenedor * porcentajeProgreso;

         }
        this.progreso5 = this.posicionHorizontalCirculo
    }
    }
    else if(id == 6){
      this.progresoActual = 0

    }
  }

}
