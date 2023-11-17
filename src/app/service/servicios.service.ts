import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private valorConsulta = new BehaviorSubject<string>('');
  valorConsulta$ = this.valorConsulta.asObservable();

  constructor() { }

  // Servicio Local
  actualizarValorConsulta(nuevoValor: string) {
    this.valorConsulta.next(nuevoValor);
  }
}
