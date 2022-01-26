package com.evenhealth.demo.controller;

import com.evenhealth.demo.model.cr_user;
import com.evenhealth.demo.model.user;
import com.evenhealth.demo.service.LoginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	LoginService ls;
	
	
  @PostMapping
  public cr_user login(@RequestBody LoginRequest request) {
    System.out.println("Login " + request.username + "/" + request.password);
    
    String username = request.username;
    String password = request.password;
    
 
    return ls.login(username, password);
  }

  static class LoginRequest {
    String username;
    String password;
    
    public String getUsername() {
    	return username;
    }
    
    public void setUsername(String username) {
    	this.username = username;
    }
    
    public String getPassword() {
    	return password;
    }
    
    public void setPassword(String password) {
    	this.password = password;
    }
  }
}
