package com.app.soar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.soar.entity.Inventory;
import com.app.soar.repository.InventoryRepository;

@Service
public class InventoryService {
	
	@Autowired
	private InventoryRepository repository;
	
	public List<Inventory>findAllInventory(){
		return repository.findAll();
	}
	
	public Inventory saveInventory(Inventory inventory) {
		if(inventory.getId()==-1) {
		 repository.save(inventory);
		}else {
			Inventory e= repository.save(inventory);
			e.setId(inventory.getId());
		}
		return inventory;
	}
}
