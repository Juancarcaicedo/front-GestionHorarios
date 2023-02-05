import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ArchivoComponent } from '../archivo/components/archivo/archivo.component';
import { AsignaccionComponent } from '../asignaccion/asignaccion/asignaccion.component';
import { FacultadComponent } from '../facultad/facultad/facultad.component';
import { HorarioComponent } from '../Horario/horario/horario.component';
import { RecursoComponent } from '../recurso/components/recurso/recurso.component';
import { TipoRecursoComponent } from '../TipoRecurso/tipo-recurso/tipo-recurso.component';
import { UbicacionComponent } from '../ubicacion/ubicacion/ubicacion.component';
import { HomeComponent } from './components/home/home.component';

 const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'recurso', component: RecursoComponent },
    { path: 'archivo', component: ArchivoComponent },
    { path: 'TipoRecurso', component: TipoRecursoComponent },
    { path: 'Asignaccion', component: AsignaccionComponent },
    { path: 'Horario', component: HorarioComponent }
   
 ]
@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }
