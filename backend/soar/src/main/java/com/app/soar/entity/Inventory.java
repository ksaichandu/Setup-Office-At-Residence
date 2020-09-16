package com.app.soar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="inventory")
public class Inventory {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Column(unique=true)
	private String name;
	private String type;
	private int cost;
	private String pathToImage;
	private int itemCount;
	
	private Inventory() {
		super();
	}

	public Inventory(int id, String name, String type, int cost, String pathToImage, int itemCount) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.cost = cost;
		this.pathToImage = pathToImage;
		this.itemCount = itemCount;
	}
	
	public Inventory(String name, String type, int cost, String pathToImage, int itemCount) {
		super();
		this.name = name;
		this.type = type;
		this.cost = cost;
		this.pathToImage = pathToImage;
		this.itemCount = itemCount;
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getPathToImage() {
		return pathToImage;
	}
	public void setPathToImage(String pathToImage) {
		this.pathToImage = pathToImage;
	}
	public int getItemCount() {
		return itemCount;
	}
	public void setItemCount(int itemCount) {
		this.itemCount = itemCount;
	}

	@Override
	public String toString() {
		return "Inventory [id=" + id + ", name=" + name + ", type=" + type + ", cost=" + cost + ", pathToImage="
				+ pathToImage + ", itemCount=" + itemCount + "]";
	}
	
	
}
