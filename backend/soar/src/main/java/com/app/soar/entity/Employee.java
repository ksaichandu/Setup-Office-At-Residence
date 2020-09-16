package com.app.soar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="employee")
public class Employee {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	@Column(unique=true)
	private String email;
	private String type;
	private String password;

	private Employee() {

	}

	public Employee(int id, String name, String email, String type, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.type = type;
		this.password = password;
	}

	public Employee(String name, String email, String type, String password) {
		super();
		this.name = name;
		this.email = email;
		this.type = type;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", email=" + email + ", type=" + type + ", password="
				+ password + "]";
	}
	
	

}
