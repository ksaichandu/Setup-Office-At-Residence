package com.app.soar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.soar.entity.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory,Integer> {

}
