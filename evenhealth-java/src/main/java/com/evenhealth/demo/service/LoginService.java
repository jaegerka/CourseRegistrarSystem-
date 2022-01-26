package com.evenhealth.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evenhealth.demo.model.cr_user;
import com.evenhealth.demo.model.user;
import com.evenhealth.demo.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository lp;
	
	
	public cr_user login(String username, String password) {
		cr_user validated = validateUser(username, password);
		return validated;
	}
	
	
	private cr_user findUserByUsername(String username) {
		return lp.findByUsername(username);
	}
	
	private cr_user validateUser(String username, String password) {
		cr_user validatedUser = null;
		cr_user currentUser = findUserByUsername(username);
		
		if (currentUser != null) {
			String userPassword = currentUser.getPassword();
			if (password.equals(userPassword)) {
				validatedUser = currentUser;
			} else {
				System.out.println("User not validated");
			}
		} else {
			System.out.println("User does not exist");
		}
		
		return validatedUser;
		
	}
	
}
