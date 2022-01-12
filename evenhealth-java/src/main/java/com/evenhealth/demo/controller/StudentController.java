package com.evenhealth.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.evenhealth.demo.model.student;
import com.evenhealth.demo.service.StudentService;

@Controller
@CrossOrigin
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
	private StudentService ss;
	
	@PostMapping("/create")
	public student createStudent(@RequestBody student newStudent) {
		System.out.println("Create Student Endpoint Hit");
		System.out.println(newStudent);
		return ss.createNewStudent(newStudent);
	}

}
