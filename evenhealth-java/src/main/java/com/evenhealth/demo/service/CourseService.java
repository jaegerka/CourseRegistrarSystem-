package com.evenhealth.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evenhealth.demo.model.course;
import com.evenhealth.demo.repository.CourseRepository;

@Service
public class CourseService {

	
	@Autowired
	private CourseRepository cr;
	
	public List<course> getAllCourses() {
		return cr.findAll();
	}
	
}
