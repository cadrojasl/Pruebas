import { Routes } from '@angular/router';
import { PeriferiaResumenComponent } from './components/periferia-resumen/periferia-resumen.component';
import { PeriferiaComponent } from './components/periferia/periferia.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: PeriferiaComponent},
    {path: 'resumen', component: PeriferiaComponent},
    {path: 'resumen/:tipoIdent/:numeroIdent', component: PeriferiaResumenComponent},
    { path: '**', redirectTo: '/home' } 
];
