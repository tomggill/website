package dev.tomgill.webapplication.models;

import java.util.HashSet;
import java.util.Set;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
  @Id
  private String id;

  @NotBlank
  @Size(min = 3, max = 20)
  private String firstname;

  @NotBlank
  @Size(min = 3, max = 20)
  private String lastname;

  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(min = 8, max = 120)
  private String password;

  @DBRef
  private Set<Role> roles = new HashSet<>();


  public User(String firstname, String lastname, String username, String email, String password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}