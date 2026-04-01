package com.proyecto.inventario.controller;

import com.proyecto.inventario.model.Computador;
import com.proyecto.inventario.service.ComputadorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/computadores")
public class ComputadorController {

    private final ComputadorService service;

    public ComputadorController(ComputadorService service) {
        this.service = service;
    }

    @PostMapping
    public Computador crear(@RequestBody Computador c) {
        return service.crear(c);
    }

    @GetMapping
    public List<Computador> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public Computador obtener(@PathVariable Long id) {
        return service.obtener(id);
    }

    @PutMapping("/{id}")
    public Computador actualizar(@PathVariable Long id, @RequestBody Computador c) {
        return service.actualizar(id, c);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }

    @PutMapping("/{id}/vender")
    public Computador vender(@PathVariable Long id) {
        return service.vender(id);
    }

    @GetMapping("/marca/{marca}")
    public List<Computador> buscarMarca(@PathVariable String marca) {
        return service.buscarPorMarca(marca);
    }
}