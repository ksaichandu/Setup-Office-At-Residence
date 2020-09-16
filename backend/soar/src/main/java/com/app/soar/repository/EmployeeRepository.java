package com.app.soar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.soar.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
