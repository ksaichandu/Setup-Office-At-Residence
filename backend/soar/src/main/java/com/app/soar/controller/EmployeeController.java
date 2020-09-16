package com.app.soar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.soar.entity.Employee;
import com.app.soar.service.EmployeeService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService service;
	
	@GetMapping(path="/employees")
	public List<Employee> retrieveAllEmployees(){
		return service.findAllEmployees();
	}
	
	@GetMapping(path="/employees/{id}")
	public Employee retrieveEmployeeById(@PathVariable int id) {
		return service.getEmployeeById(id);
	}
	
	@PostMapping(path="/addEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return service.saveEmployee(employee);
	}
	
	@PutMapping(path="/updateEmployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employee) {
		Employee updated= service.saveEmployee(employee);
		return new ResponseEntity<Employee>(employee,HttpStatus.OK);
	}
	
	@DeleteMapping(path="/employees/{id}")
	public ResponseEntity<Void>deleteEmployee(@PathVariable int id){
		Employee e=service.deleteEmployee(id);
		if(e!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
