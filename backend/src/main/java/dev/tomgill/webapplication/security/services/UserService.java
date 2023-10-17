package dev.tomgill.webapplication.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.tomgill.webapplication.models.User;
import dev.tomgill.webapplication.repository.UserRepository;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public List<User> allUsers() {
    return userRepository.findAll();
  }
  
}
