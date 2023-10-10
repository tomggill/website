package dev.tomgill.webapplication.payload.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {
  @NotBlank(message = "Username field must not be blank.")
  private String username;

  @NotBlank(message = "Password field must not be blank.")
  private String password;
}