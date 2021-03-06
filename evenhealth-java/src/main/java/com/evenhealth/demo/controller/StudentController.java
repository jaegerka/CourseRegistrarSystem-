package com.evenhealth.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.evenhealth.demo.model.student;
import com.evenhealth.demo.service.StudentService;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
	private StudentService ss;

	@GetMapping
	public List<student> getAllStudents() {
		return ss.getAllStudents();
	}
	
	@PostMapping("/create")
	public void createStudent(@RequestBody student newStudent) {
		System.out.println("Create Student Endpoint Hit");
		System.out.println(newStudent.getFirst_name());
		ss.createNewStudent(newStudent);
	}
	
	@PutMapping("/delete/100")
	public void deleteStudent(
//			@PathVariable(value = "id") int id
			) {
		System.out.println("Delete Student Endpoint Hit");
		ss.deleteStudent(100);
	}

}
