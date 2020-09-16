package com.app.soar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.soar.entity.Employee;
import com.app.soar.entity.Inventory;
import com.app.soar.service.InventoryService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class InventoryController {
	
	@Autowired
	private InventoryService service;
	
	@GetMapping(path="/inventory")
	public List<Inventory>retrieveAllInventory(){
		return service.findAllInventory();
	}
	
	@PostMapping(path="/addInventory")
	public Inventory addEmployee(@RequestBody Inventory inventory) {
		return service.saveInventory(inventory);
	}
}
