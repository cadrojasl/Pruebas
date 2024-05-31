package com.prueba.periferia.webapp.springbootweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.periferia.webapp.springbootweb.dto.ErrorResponse;
import com.prueba.periferia.webapp.springbootweb.dto.PersonaDTO;
import com.prueba.periferia.webapp.springbootweb.entity.Personas;
import com.prueba.periferia.webapp.springbootweb.service.interfaces.IPersonaService;

@CrossOrigin(originPatterns = {"*"})
@RestController
@RequestMapping("api/cliente")
public class PruebaController {

    @Autowired
    private IPersonaService servPersona;

    @PostMapping("/info")
    public ResponseEntity<?> getClienteInfo(@RequestBody PersonaDTO request) {
        try {
            String tipoDocumento = request.getTipoDocumento();
            String numeroDocumento = request.getNumeroIdentificacion();

            // Validar que ambos tipos de datos
            if (tipoDocumento.isEmpty() || tipoDocumento == null || numeroDocumento == null) {
                // devuelve 400
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorResponse(HttpStatus.BAD_REQUEST.value(),"Los datos de tipo de documento o número de documento no pueden estar vacíos."));
            }

            // Verificar el tipo de documento
            if (!tipoDocumento.equals("C") && !tipoDocumento.equals("P")) {
                // devuelve 400
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "El tipo de documento especificado no es válido. Debe ser 'C' o 'P'."));
            }
            // buscar
            Personas persona = servPersona.buscarPersonas(tipoDocumento, numeroDocumento);

            if (persona == null) {
                // devuelve 404
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), 
                                        "El cliente con el tipo de documento y número de identificación no se encontró."));
            
            }
            // devuelve 200
            return ResponseEntity.status(HttpStatus.OK).body(persona);
        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Se produjo un error interno al procesar la solicitud. Por favor, contacte al administrador."));
        }
    }

}



