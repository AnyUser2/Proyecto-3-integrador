package com.proyecto.inventario.repository;

import com.proyecto.inventario.model.Computador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputadorRepository extends JpaRepository<Computador, Long> {
    List<Computador> findByMarca(String marca);
}