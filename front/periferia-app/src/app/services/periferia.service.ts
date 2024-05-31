import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { periferiaInfo } from '../models/periferiaInfo';
import { periferiaPersona } from '../models/periferiaPersona';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PeriferiaService {
  private apiUrl = 'http://localhost:8090/api/cliente'; // URL del backend

  constructor(private http: HttpClient) { 

  }
  buscarPersona(persona: periferiaPersona): Observable<periferiaInfo> {
    return this.http.post<periferiaInfo>(`${this.apiUrl}/info`, persona).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error desconocido';
       
          errorMessage = `Status-${error.status}. Mensaje: ${error.error.message}`;
        
        Swal.fire({
          icon: 'error',
          title: 'Error '+error.status,
          text: errorMessage
        });
        return throwError(errorMessage);
      })
    );
  }
}
