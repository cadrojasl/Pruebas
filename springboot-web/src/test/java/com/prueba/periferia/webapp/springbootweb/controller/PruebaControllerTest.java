package com.prueba.periferia.webapp.springbootweb.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.web.servlet.MockMvc;


import com.prueba.periferia.webapp.springbootweb.service.interfaces.IPersonaService;

@SpringBootTest
@AutoConfigureMockMvc
public class PruebaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private IPersonaService personaService;

    @InjectMocks
    private PruebaController pruebaController;

    @Test
    public void testGetClienteInfo() throws Exception {
      
        //valida endpoint para 400 badrequest
        mockMvc.perform(get("/api/cliente/info")
                .contentType("application/json")
                .content("{\"tipoDocumento\":\"A\", \"numeroIdentificacion\":\"23445322\"}"))
                .andExpect(status().isBadRequest());
        //valida endpoint para 200 ok
         mockMvc.perform(get("/api/cliente/info")
                .contentType("application/json")
                .content("{\"tipoDocumento\":\"C\", \"numeroIdentificacion\":\"23445322\"}"))
                .andExpect(status().isOk());
        //valida endpouint para 404 no existe
        mockMvc.perform(get("/api/cliente/info")
                .contentType("application/json")
                .content("{\"tipoDocumento\":\"C\", \"numeroIdentificacion\":\"234453221111\"}"))
                .andExpect(status().isNotFound());
    }
}
