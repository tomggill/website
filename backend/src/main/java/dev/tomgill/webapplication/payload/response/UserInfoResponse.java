package dev.tomgill.webapplication.payload.response;

import java.util.List;

import lombok.Data;

@Data
public class UserInfoResponse {
  private String id;
  private String firstname;
  private String lastname;
  private String username;
  private String email;
  private List<String> roles;
  private String accessToken;

  public UserInfoResponse(String id, String firstname, String lastname, String username, String email, List<String> roles, String accessToken) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.roles = roles;
    this.accessToken = accessToken;
  }
}