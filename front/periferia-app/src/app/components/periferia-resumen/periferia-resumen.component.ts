import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, RouterModule } from '@angular/router';
import { PeriferiaService } from '../../services/periferia.service';
import { periferiaPersona } from '../../models/periferiaPersona';
import { periferiaInfo } from '../../models/periferiaInfo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-periferia-resumen',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './periferia-resumen.component.html',
  styleUrl: './periferia-resumen.component.css'
})
export class PeriferiaResumenComponent  implements OnInit  {

  public personaCon: periferiaPersona;
  personaInfo!:periferiaInfo;
  constructor(private route: ActivatedRoute, private servicep: PeriferiaService){
  this.personaCon = new periferiaPersona();
  this.route.params.subscribe(params => {
    this.personaCon.tipoDocumento = params['tipoIdent'];
    this.personaCon.numeroIdentificacion = params['numeroIdent'];
  });
  }

  ngOnInit() {
  this.servicep.buscarPersona(this.personaCon).subscribe((personaInfo)=>this.personaInfo=personaInfo
  );
  }
 
  obtenerTipoDocumento(): string {
    return this.personaInfo.tipoDocumento === 'C' ? 'Cédula Ciudadanía' : 'Pasaporte';
  }
}
