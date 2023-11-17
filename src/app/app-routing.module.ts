import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RemesaComponent } from './components/remesa/remesa.component';
import { GuiaComponent } from './components/guia/guia.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'consulta',
    pathMatch:'full'
  },
  {
    path:'consulta',
    component: ConsultaComponent
  },
  {
    path:'remesa',
    component: RemesaComponent
  },
  {
    path:'guia',
    component: GuiaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
