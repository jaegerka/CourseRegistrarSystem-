package com.evenhealth.demo.controller;

import com.evenhealth.demo.model.course;
import com.evenhealth.demo.service.CourseService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping("/courses")
public class CourseController {
  @Autowired
  private CourseService service;

  @GetMapping
  public List<course> getAllCourses() {
    return service.getAllCourses();
  }
}
