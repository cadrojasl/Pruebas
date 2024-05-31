package com.prueba.periferia.webapp.springbootweb.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prueba.periferia.webapp.springbootweb.entity.Personas;

public interface IPersonaDao extends JpaRepository<Personas, Long>{

    Personas findByTipoDocumentoAndNumeroIdentificacion(String tipoDocumento, String numeroDocumento);

}
