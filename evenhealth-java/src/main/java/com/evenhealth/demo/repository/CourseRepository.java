package com.evenhealth.demo.repository;

import org.springframework.stereotype.Repository;

import com.evenhealth.demo.model.course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface CourseRepository extends JpaRepository<course, Integer> {

	public List<course> findAll();
}
