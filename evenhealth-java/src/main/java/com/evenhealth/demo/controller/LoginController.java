package com.evenhealth.demo.controller;

import com.evenhealth.demo.model.user;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping("/login")
public class LoginController {
  @PostMapping
  public user login(@RequestBody LoginRequest request) {
    System.out.println("Login " + request.username + "/" + request.password);
    //TODO #1
    return null;
  }

  static class LoginRequest {
    String username;
    String password;
  }
}
