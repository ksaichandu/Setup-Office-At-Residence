package com.app.soar.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.soar.entity.Employee;
import com.app.soar.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;

	public Employee saveEmployee(Employee employee) {
		if(employee.getId()==-1) {
		 repository.save(employee);
		}else {
			Employee e= repository.save(employee);
			e.setId(employee.getId());
		}
		return employee;
	}
	
	public Employee getEmployeeById(int id) {
		return repository.findById(id).orElse(null);
	}

	public List<Employee> findAllEmployees() {
		return repository.findAll();
	}
	
	public Employee deleteEmployee( int id) {
		Employee e=repository.findById(id).orElse(null);
		repository.delete(e);
		return e;
	}

	
	
}
