package com.evenhealth.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evenhealth.demo.model.student;

@Repository
public interface StudentRepository extends JpaRepository<student, Integer> {

}
