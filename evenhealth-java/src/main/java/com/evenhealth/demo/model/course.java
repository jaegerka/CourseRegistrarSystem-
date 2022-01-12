package com.evenhealth.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class course {
	
	@Column
	@Id
	private String code;
	
	@Column
	private String name;
	
	@Column
	private String description;
	
	@Column
	private int professor;
	
	@Column
	private int capacity;
	
	
	
	public course() {
		super();
		
	}
	public course(String code, String name, String description, int professor, int capacity) {
		super();
		this.code = code;
		this.name = name;
		this.description = description;
		this.professor = professor;
		this.capacity = capacity;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getProfessor() {
		return professor;
	}
	public void setProfessor(int professor) {
		this.professor = professor;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	
	

}
