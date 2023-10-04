package dev.tomgill.webapplication;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public List<User> allUsers() {
    return userRepository.findAll();
  }

  public Optional<User> singleUser(String userId) {
    return userRepository.findUserByUserId(userId);
  }

  public User createUser(String firstName, String lastName, String userName, String password, String email) {
    User user = new User(firstName, lastName, userName, password, email);
    userRepository.insert(user);
    return user;
  }
  
}
