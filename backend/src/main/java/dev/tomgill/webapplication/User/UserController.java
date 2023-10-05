package dev.tomgill.webapplication.User;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
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
@RequestMapping("/api/user-details")
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

  @PostMapping("/register")
  public ResponseEntity<?> createUser(@RequestBody Map<String, String> payload) {
    try {
      User user = userService.createUser(payload.get("firstName"), payload.get("lastName"), payload.get("userName"), payload.get("password"), payload.get("email"));
      return new ResponseEntity<User>(user, HttpStatus.OK);
    } catch (DuplicateKeyException error) {
      return new ResponseEntity<String>(error.toString(), HttpStatus.CONFLICT);
    }
  }
}
