package dev.tomgill.webapplication.payload.response;

import lombok.Data;

@Data
public class UserSignInResponse {
  private String username;
  private String accessToken;

  public UserSignInResponse(String username, String accessToken) {
    this.username = username;
    this.accessToken = accessToken;
  }
}
