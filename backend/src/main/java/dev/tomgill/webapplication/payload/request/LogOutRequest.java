package dev.tomgill.webapplication.payload.request;

import lombok.Data;

@Data
public class LogOutRequest {
  private String accessToken;
}