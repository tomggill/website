package dev.tomgill.webapplication;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/user-entries")
public class UserController {
  @Autowired
  private UserService userService;

  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
    return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
  }

  @GetMapping("/{userId}")
  public ResponseEntity<Optional<User>> getUser(@PathVariable String userId) {
    return new ResponseEntity<Optional<User>>(userService.singleUser(userId), HttpStatus.OK);
  }

  @GetMapping("/{userName}")
  public ResponseEntity<Optional<User>> getUserName(@PathVariable String userName) {
    return new ResponseEntity<Optional<User>>(userService.singleUser(userName), HttpStatus.OK);
  }

  @PostMapping("/create")
  public ResponseEntity<User> createUser(@RequestBody Map<String, String> payload) {
    return new ResponseEntity<User>(userService.createUser(payload.get("firstName"), payload.get("lastName"), payload.get("userName"), payload.get("password"), payload.get("email")), HttpStatus.CREATED);
  }

  // @PostMapping("/")
  // User getUser(@RequestBody User user) {
  //   return userRepository.save(user);
  // }

  // @PutMapping("/{id}")
  // User getUser(@PathVariable String id, @RequestBody User user) {
  //   User oldUser = userRepository.findById(id).orElse(null);
  //   oldUser.setName(user.getName());
  //   oldUser.setEmail(user.getEmail());
  //   oldUser.setPassword(user.getPassword());
  //   return userRepository.save(oldUser);
  // }

  // @DeleteMapping("/{id}")
  // String deleteUser(@PathVariable String id) {
  //   userRepository.deleteById(id);
  //   return id;
  // }
}
