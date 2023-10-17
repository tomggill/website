package dev.tomgill.webapplication.security.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class EnvironmentVariableService {
  @Value("${tomgill.app.serverEnvironment}")
  private String serverEnvironment;

  public String serverEnvironment() {
    return serverEnvironment;
  }
}
