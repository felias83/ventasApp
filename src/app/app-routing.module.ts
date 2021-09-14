import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaDetalleComponent } from './components/empresa-detalle/empresa-detalle.component';
import { EmpresasComponent } from './components/empresas/empresas.component';


const routes: Routes = [
{ path: 'empresas', component: EmpresasComponent },
{ path: 'empresas/:nombre_empresa', component: EmpresaDetalleComponent },
{ path: '', redirectTo: '/empresas', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
