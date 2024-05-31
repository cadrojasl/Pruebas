package com.prueba.periferia.webapp.springbootweb.service.interfaces;

import com.prueba.periferia.webapp.springbootweb.entity.Personas;

public interface IPersonaService {
    public Personas buscarPersonas (String tipoDocumento, String numeroDocumento);
}
