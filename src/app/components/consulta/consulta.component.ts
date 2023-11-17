import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent {

  // Variables
  public formCreateConsulta!: FormGroup;
  public loading: boolean = false;
  public consultas: string[] = ['Remesa', 'Guia', 'FA - Numero Factura Cliente', 'RE - Numero Remision Cliente'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private miServicio: ServiciosService,
  ) { }

  ngOnInit(): void {
    // Se inicia el fomulario con los valideitors
    this.formCreateConsulta = this.formBuilder.group({
      consulta: ['', Validators.required],
      numero_consulta: ['', Validators.required],
    })

  }

  agregarConsulta() {

    if (this.formCreateConsulta.status === 'VALID') {
      let estructura = {
        "consulta": this.formCreateConsulta.value.consulta,
        "numero_consulta": this.formCreateConsulta.value.numero_consulta,
      }

      console.log(estructura);

      // Servicio BehaviorSubject
      let numeroConsulta = this.formCreateConsulta.value.numero_consulta.toUpperCase();
      this.miServicio.actualizarValorConsulta(numeroConsulta);

      // validacion de la consulta
      const consultaSeleccionada = this.formCreateConsulta.value.consulta;

      if (consultaSeleccionada === '3' || consultaSeleccionada === '4') {
        this.toastr.success('Consulta de Remesa con Éxito');
        this.router.navigate(['/remesa']);

      } else if (consultaSeleccionada === '1' || consultaSeleccionada === '2') {
        this.toastr.success('Consulta de Guia con Éxito');
        this.router.navigate(['/guia']);

      } else {
        this.toastr.error('Error en la consulta', "Consulta No Definida");
      }

      this.formCreateConsulta.reset();
      // this.loading = true;

    } else {

      this.formCreateConsulta.markAllAsTouched();
      this.toastr.error('Error en la consulta', "Campos Vacios");
    }
  }


}
