import { Component } from '@angular/core';
import { periferiaPersona } from '../../models/periferiaPersona';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-periferia',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './periferia.component.html',
  styleUrl: './periferia.component.css'
})
export class PeriferiaComponent {

  public persona: periferiaPersona;
  numIdent!: String;

  constructor(private router: Router) {
    this.persona = new periferiaPersona();
    this.persona.tipoDocumento = '';
    // Inicializa botonActivo como false al crear una nueva instancia de periferiaPersona
    this.persona.botonActivo = false;
    this.persona.numeroIdentificacion = '';
  }
  validarCampos(): void {
    // Actualiza el estado de botonActivo 
    this.persona.numeroIdentificacion = this.persona.numeroIdentificacion.replace(/[,\.]/g, '');
    this.numIdent = this.persona.numeroIdentificacion;
    this.persona.botonActivo = !!this.persona.tipoDocumento && !!this.persona.numeroIdentificacion && this.persona.numeroIdentificacion.length >= 8;
    const numero = parseInt(this.persona.numeroIdentificacion);
    if (numero <= 0 || isNaN(numero)) {
      this.persona.numeroIdentificacion = '';
    } else {
      // Formatear el número con separadores de miles
      this.persona.numeroIdentificacion = numero.toLocaleString();
    }
  }
  validarTecla(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;
    // Permitir teclas de borrado (retroceso y suprimir) y números
    if ((charCode >= 37 && charCode <= 40) || (charCode >= 48 && charCode <= 57) || charCode === 8 || charCode === 46) {
      return true;
    } else {
      // Si no es una tecla permitida
      event.preventDefault();
      return false;
    }
  }
}