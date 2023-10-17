package dev.tomgill.webapplication.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tomgill.webapplication.models.Role;
import dev.tomgill.webapplication.models.User;
import dev.tomgill.webapplication.payload.response.MessageResponse;
import dev.tomgill.webapplication.repository.RoleRepository;
import dev.tomgill.webapplication.repository.UserRepository;
import dev.tomgill.webapplication.security.jwt.JwtUtils;
import dev.tomgill.webapplication.security.services.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

  @Autowired
  UserRepository userRepository;

  @Autowired
  UserService userService;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  JwtUtils jwtUtils;

  @GetMapping("/getall")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<User>> getAllUsers() {
    return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
  }

  // @GetMapping("/restoreAuthDetails/{accessToken}")
  // public ResponseEntity<?> getUsernameAndRoleDetailsFromJWTAccessToken(@PathVariable String accessToken) {
  //   // Check accessToken is valid.
  //   if (!jwtUtils.validateJwtToken(accessToken)) {
  //     return ResponseEntity.status(HttpStatus.BAD_REQUEST)
  //       .body(new MessageResponse("JWT accessToken is Invalid."));
  //   }

  //   // Get user details from accessToken
  //   String username = jwtUtils.getUserNameFromJwtToken(accessToken);
  //   Optional<User> optionalUser = userRepository.findByUsername(username);
  //   if (optionalUser.isEmpty()) {
  //     return ResponseEntity.status(HttpStatus.BAD_REQUEST)
  //       .body(new MessageResponse("User doesn't exist."));
  //   }
  //   User user = optionalUser.get();
  //   Set<Role> setRoles = user.getRoles();
  //   List<String> roles = new ArrayList<String>();
  //   setRoles.forEach((role) -> {
  //     roles.add(role.getName().toString());
  //   });
  //   Map<String, Object> usernameAndRoleDetails = new HashMap<String, Object>();
  //   usernameAndRoleDetails.put("username", user.getUsername());
  //   usernameAndRoleDetails.put("roles", roles);


  //   // Return necessary user details
  //   return ResponseEntity.status(HttpStatus.OK)
  //   .body(usernameAndRoleDetails);
  // }
}
