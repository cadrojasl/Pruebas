package com.prueba.periferia.webapp.springbootweb.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.prueba.periferia.webapp.springbootweb.dao.IPersonaDao;
import com.prueba.periferia.webapp.springbootweb.entity.Personas;
import com.prueba.periferia.webapp.springbootweb.service.interfaces.IPersonaService;

@Service
public class PersonaService implements IPersonaService {

    @Autowired
    private IPersonaDao daoRepo;

    @Override
    public Personas buscarPersonas (String tipoDocumento, String numeroDocumento) {
        return daoRepo.findByTipoDocumentoAndNumeroIdentificacion(tipoDocumento, numeroDocumento);
    }



}
