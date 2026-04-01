package com.proyecto.inventario.service;

import com.proyecto.inventario.model.Computador;
import com.proyecto.inventario.repository.ComputadorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComputadorService {

    private final ComputadorRepository repository;

    public ComputadorService(ComputadorRepository repository) {
        this.repository = repository;
    }

    public Computador crear(Computador c) {
        c.setEstadoVenta("DISPONIBLE");
        return repository.save(c);
    }

    public List<Computador> listar() {
        return repository.findAll();
    }

    public Computador obtener(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("No encontrado"));
    }

    public Computador actualizar(Long id, Computador nuevo) {
        Computador c = obtener(id);

        c.setMarca(nuevo.getMarca());
        c.setModelo(nuevo.getModelo());
        c.setProcesador(nuevo.getProcesador());
        c.setRam(nuevo.getRam());
        c.setAlmacenamiento(nuevo.getAlmacenamiento());
        c.setEstadoFisico(nuevo.getEstadoFisico());
        c.setDescripcion(nuevo.getDescripcion());
        c.setPrecio(nuevo.getPrecio());

        return repository.save(c);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    public Computador vender(Long id) {
        Computador c = obtener(id);
        c.setEstadoVenta("VENDIDO");
        return repository.save(c);
    }

    public List<Computador> buscarPorMarca(String marca) {
        return repository.findByMarca(marca);
    }
}
