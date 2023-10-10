package dev.tomgill.webapplication.payload.request;

import java.io.Serializable;
import java.util.Set;

import dev.tomgill.webapplication.payload.validation.password.ValidPassword;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class SignUpRequest implements Serializable {
  @NotBlank(message = "First Name field must not be blank.")
  @Size(min = 3, max = 20, message = "First Name must be between 3-20 characters.")
  private String firstname;

  @NotBlank(message = "Last Name field must not be blank.")
  @Size(min = 3, max = 20, message = "Last Name must be between 3-20 characters.")
  private String lastname;

  @NotBlank(message = "Username field must not be blank.")
  @Size(min = 3, max = 20, message = "Username must be between 3-20 characters.")
  private String username;

  @NotBlank(message = "Email field must not be blank.")
  @Size(max = 50, message = "Email must be fewer than 50 characters.")
  @Email(message = "You must use a valid email.")
  private String email;

  private Set<String> roles;

  // @NotBlank(message = "Password field must not be blank.")
  // @Size(min = 6, max = 120, message = "Password must be between 8-120 characters.")
  @ValidPassword
  private String password;
}