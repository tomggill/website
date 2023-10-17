package dev.tomgill.webapplication.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tomgill.webapplication.security.services.EnvironmentVariableService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/env")
public class EnvironmentVariableController {

  @Autowired
  EnvironmentVariableService environmentVariableService;

  @GetMapping("/server-environment")
  public ResponseEntity<?> getServerEnvironment() {
    return new ResponseEntity<String>(environmentVariableService.serverEnvironment(), HttpStatus.OK);
  }
  
}
