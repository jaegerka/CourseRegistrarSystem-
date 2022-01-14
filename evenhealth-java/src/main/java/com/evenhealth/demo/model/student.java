package com.evenhealth.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class student extends user {
	
	@Column
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int student_id;
	
	@Column
	private String first_name;
	
	@Column 
	private String last_name;
	
	@Column
	private String username;

	public int getId() {
		return student_id;
	}

	public void setId(int id) {
		this.student_id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	
}
