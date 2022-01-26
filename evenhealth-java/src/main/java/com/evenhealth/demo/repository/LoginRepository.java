package com.evenhealth.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evenhealth.demo.model.cr_user;

@Repository
public interface LoginRepository extends JpaRepository<cr_user, Integer>{
	
	public cr_user findByUsername(String username);
	
}
